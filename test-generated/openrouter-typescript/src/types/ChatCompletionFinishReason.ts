import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type ChatCompletionFinishReason = "tool_calls" | "stop" | "length" | "content_filter" | "error";

export const ChatCompletionFinishReasonSchema: TypedSchema<ChatCompletionFinishReason> = typed<ChatCompletionFinishReason>(union(
  literal("tool_calls"),
  literal("stop"),
  literal("length"),
  literal("content_filter"),
  literal("error"),
));

/**
 * Enum values for ChatCompletionFinishReason.
 * Use these constants for type-safe comparisons.
 */
export const ChatCompletionFinishReason = {
  TOOL_CALLS: "tool_calls" as const,
  STOP: "stop" as const,
  LENGTH: "length" as const,
  CONTENT_FILTER: "content_filter" as const,
  ERROR: "error" as const,
} as const;