import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type ReasoningSummaryVerbosity = "auto" | "concise" | "detailed";

export const ReasoningSummaryVerbositySchema: TypedSchema<ReasoningSummaryVerbosity> = typed<ReasoningSummaryVerbosity>(union(
  literal("auto"),
  literal("concise"),
  literal("detailed"),
));

/**
 * Enum values for ReasoningSummaryVerbosity.
 * Use these constants for type-safe comparisons.
 */
export const ReasoningSummaryVerbosity = {
  AUTO: "auto" as const,
  CONCISE: "concise" as const,
  DETAILED: "detailed" as const,
} as const;