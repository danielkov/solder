import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OpenAiResponsesReasoningEffort = "high" | "medium" | "low" | "minimal" | "none";

export const OpenAiResponsesReasoningEffortSchema: TypedSchema<OpenAiResponsesReasoningEffort> = typed<OpenAiResponsesReasoningEffort>(union(
  literal("high"),
  literal("medium"),
  literal("low"),
  literal("minimal"),
  literal("none"),
));

/**
 * Enum values for OpenAiResponsesReasoningEffort.
 * Use these constants for type-safe comparisons.
 */
export const OpenAiResponsesReasoningEffort = {
  HIGH: "high" as const,
  MEDIUM: "medium" as const,
  LOW: "low" as const,
  MINIMAL: "minimal" as const,
  NONE: "none" as const,
} as const;