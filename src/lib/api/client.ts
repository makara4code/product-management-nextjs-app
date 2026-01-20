/**
 * API Client with error handling and interceptors
 */

import { API_CONFIG } from "@/constants/config";
import type { ApiError, RequestOptions } from "@/types/api";

export class ApiClientError extends Error {
  public readonly status: number;
  public readonly code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = code;
  }

  toJSON(): ApiError {
    return {
      message: this.message,
      status: this.status,
      code: this.code,
    };
  }
}

type RequestInterceptor = (
  config: RequestInit,
) => RequestInit | Promise<RequestInit>;
type ResponseInterceptor = (response: Response) => Response | Promise<Response>;
type ErrorInterceptor = (
  error: ApiClientError,
) => ApiClientError | Promise<never>;

interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
}

class ApiClient {
  private baseURL: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  constructor(config: ApiClientConfig) {
    this.baseURL = config.baseURL;
    this.timeout = config.timeout ?? API_CONFIG.TIMEOUT;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...config.defaultHeaders,
    };
  }

  /**
   * Add a request interceptor
   */
  addRequestInterceptor(interceptor: RequestInterceptor): () => void {
    this.requestInterceptors.push(interceptor);
    return () => {
      const index = this.requestInterceptors.indexOf(interceptor);
      if (index > -1) {
        this.requestInterceptors.splice(index, 1);
      }
    };
  }

  /**
   * Add a response interceptor
   */
  addResponseInterceptor(interceptor: ResponseInterceptor): () => void {
    this.responseInterceptors.push(interceptor);
    return () => {
      const index = this.responseInterceptors.indexOf(interceptor);
      if (index > -1) {
        this.responseInterceptors.splice(index, 1);
      }
    };
  }

  /**
   * Add an error interceptor
   */
  addErrorInterceptor(interceptor: ErrorInterceptor): () => void {
    this.errorInterceptors.push(interceptor);
    return () => {
      const index = this.errorInterceptors.indexOf(interceptor);
      if (index > -1) {
        this.errorInterceptors.splice(index, 1);
      }
    };
  }

  /**
   * Build URL with query parameters
   */
  private buildURL(
    endpoint: string,
    params?: Record<string, string | number | boolean | undefined>,
  ): string {
    const url = new URL(endpoint, this.baseURL);

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.set(key, String(value));
        }
      }
    }

    return url.toString();
  }

  /**
   * Execute request with interceptors
   */
  private async executeRequest<T>(
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<T> {
    const { method = "GET", headers, body, params, signal } = options;

    // Build request config
    let config: RequestInit = {
      method,
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
      signal: signal ?? AbortSignal.timeout(this.timeout),
    };

    if (body && method !== "GET") {
      config.body = JSON.stringify(body);
    }

    // Run request interceptors
    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    const url = this.buildURL(endpoint, params);

    try {
      let response = await fetch(url, config);

      // Run response interceptors
      for (const interceptor of this.responseInterceptors) {
        response = await interceptor(response);
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new ApiClientError(
          errorData.message || `Request failed with status ${response.status}`,
          response.status,
          errorData.code,
        );

        // Run error interceptors
        for (const interceptor of this.errorInterceptors) {
          await interceptor(error);
        }

        throw error;
      }

      return response.json();
    } catch (error) {
      if (error instanceof ApiClientError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === "AbortError" || error.name === "TimeoutError") {
          throw new ApiClientError("Request timeout", 408, "TIMEOUT");
        }
        throw new ApiClientError(error.message, 0, "NETWORK_ERROR");
      }

      throw new ApiClientError("An unexpected error occurred", 0, "UNKNOWN");
    }
  }

  async get<T>(
    endpoint: string,
    options?: Omit<RequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.executeRequest<T>(endpoint, { ...options, method: "GET" });
  }

  async post<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.executeRequest<T>(endpoint, {
      ...options,
      method: "POST",
      body,
    });
  }

  async put<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.executeRequest<T>(endpoint, {
      ...options,
      method: "PUT",
      body,
    });
  }

  async patch<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.executeRequest<T>(endpoint, {
      ...options,
      method: "PATCH",
      body,
    });
  }

  async delete<T>(
    endpoint: string,
    options?: Omit<RequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.executeRequest<T>(endpoint, { ...options, method: "DELETE" });
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

// Add default error interceptor for logging
if (process.env.NODE_ENV === "development") {
  apiClient.addErrorInterceptor((error) => {
    console.error("[API Error]", {
      message: error.message,
      status: error.status,
      code: error.code,
    });
    return error;
  });
}

export { ApiClient };
