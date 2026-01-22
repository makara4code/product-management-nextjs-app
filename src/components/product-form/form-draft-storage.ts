import type { CreateProductData } from "@/types/product";

const FORM_DRAFT_KEY_PREFIX = "product-form-draft";

export function getStorageKey(
  mode: "create" | "edit",
  productId?: number,
): string {
  return `${FORM_DRAFT_KEY_PREFIX}-${mode === "edit" && productId ? productId : "new"}`;
}

export function loadDraftFromStorage(
  storageKey: string,
): CreateProductData | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved) as CreateProductData;
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

export function saveDraftToStorage(
  storageKey: string,
  data: CreateProductData,
): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch {
    // Ignore storage errors (e.g., quota exceeded)
  }
}

export function clearDraftFromStorage(storageKey: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // Ignore errors
  }
}
