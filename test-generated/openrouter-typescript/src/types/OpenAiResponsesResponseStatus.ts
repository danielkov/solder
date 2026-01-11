import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OpenAiResponsesResponseStatus = "completed" | "incomplete" | "in_progress" | "failed" | "cancelled" | "queued";

export const OpenAiResponsesResponseStatusSchema: TypedSchema<OpenAiResponsesResponseStatus> = typed<OpenAiResponsesResponseStatus>(union(
  literal("completed"),
  literal("incomplete"),
  literal("in_progress"),
  literal("failed"),
  literal("cancelled"),
  literal("queued"),
));

/**
 * Enum values for OpenAiResponsesResponseStatus.
 * Use these constants for type-safe comparisons.
 */
export const OpenAiResponsesResponseStatus = {
  COMPLETED: "completed" as const,
  INCOMPLETE: "incomplete" as const,
  IN_PROGRESS: "in_progress" as const,
  FAILED: "failed" as const,
  CANCELLED: "cancelled" as const,
  QUEUED: "queued" as const,
} as const;