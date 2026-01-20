type LogLevel = "debug" | "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
}

interface LoggerConfig {
  minLevel: LogLevel;
  enabled: boolean;
  timestamps: boolean;
  onLog?: (entry: LogEntry) => void;
}

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const LOG_LEVEL_STYLES: Record<LogLevel, string> = {
  debug: "color: #6b7280",
  info: "color: #3b82f6",
  warn: "color: #f59e0b",
  error: "color: #ef4444",
};

function createLogger(config: LoggerConfig) {
  const shouldLog = (level: LogLevel): boolean => {
    if (!config.enabled) return false;
    return LOG_LEVEL_PRIORITY[level] >= LOG_LEVEL_PRIORITY[config.minLevel];
  };

  const formatMessage = (level: LogLevel, message: string): string => {
    const prefix = `[${level.toUpperCase()}]`;
    if (config.timestamps) {
      return `${new Date().toISOString()} ${prefix} ${message}`;
    }
    return `${prefix} ${message}`;
  };

  const createLogEntry = (
    level: LogLevel,
    message: string,
    context?: LogContext,
  ): LogEntry => ({
    timestamp: new Date().toISOString(),
    level,
    message,
    context,
  });

  const log = (
    level: LogLevel,
    message: string,
    context?: LogContext,
  ): void => {
    if (!shouldLog(level)) return;

    const entry = createLogEntry(level, message, context);
    config.onLog?.(entry);

    const formattedMessage = formatMessage(level, message);
    const consoleMethod = level === "debug" ? "log" : level;

    if (typeof window !== "undefined") {
      if (context) {
        console[consoleMethod](
          `%c${formattedMessage}`,
          LOG_LEVEL_STYLES[level],
          context,
        );
      } else {
        console[consoleMethod](
          `%c${formattedMessage}`,
          LOG_LEVEL_STYLES[level],
        );
      }
    } else {
      if (context) {
        console[consoleMethod](formattedMessage, JSON.stringify(context));
      } else {
        console[consoleMethod](formattedMessage);
      }
    }
  };

  return {
    debug: (message: string, context?: LogContext) =>
      log("debug", message, context),
    info: (message: string, context?: LogContext) =>
      log("info", message, context),
    warn: (message: string, context?: LogContext) =>
      log("warn", message, context),
    error: (message: string, context?: LogContext) =>
      log("error", message, context),
    child: (defaultContext: LogContext) => ({
      debug: (message: string, context?: LogContext) =>
        log("debug", message, { ...defaultContext, ...context }),
      info: (message: string, context?: LogContext) =>
        log("info", message, { ...defaultContext, ...context }),
      warn: (message: string, context?: LogContext) =>
        log("warn", message, { ...defaultContext, ...context }),
      error: (message: string, context?: LogContext) =>
        log("error", message, { ...defaultContext, ...context }),
    }),
  };
}

export const logger = createLogger({
  minLevel: process.env.NODE_ENV === "production" ? "warn" : "debug",
  enabled: process.env.NODE_ENV !== "test",
  timestamps: true,
});

export { createLogger };
export type { LogLevel, LogContext, LogEntry, LoggerConfig };
