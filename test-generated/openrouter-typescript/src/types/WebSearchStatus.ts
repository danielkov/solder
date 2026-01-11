import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type WebSearchStatus = "completed" | "searching" | "in_progress" | "failed";

export const WebSearchStatusSchema: TypedSchema<WebSearchStatus> = typed<WebSearchStatus>(union(
  literal("completed"),
  literal("searching"),
  literal("in_progress"),
  literal("failed"),
));

/**
 * Enum values for WebSearchStatus.
 * Use these constants for type-safe comparisons.
 */
export const WebSearchStatus = {
  COMPLETED: "completed" as const,
  SEARCHING: "searching" as const,
  IN_PROGRESS: "in_progress" as const,
  FAILED: "failed" as const,
} as const;