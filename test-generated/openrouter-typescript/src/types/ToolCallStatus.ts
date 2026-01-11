import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type ToolCallStatus = "in_progress" | "completed" | "incomplete";

export const ToolCallStatusSchema: TypedSchema<ToolCallStatus> = typed<ToolCallStatus>(union(
  literal("in_progress"),
  literal("completed"),
  literal("incomplete"),
));

/**
 * Enum values for ToolCallStatus.
 * Use these constants for type-safe comparisons.
 */
export const ToolCallStatus = {
  IN_PROGRESS: "in_progress" as const,
  COMPLETED: "completed" as const,
  INCOMPLETE: "incomplete" as const,
} as const;