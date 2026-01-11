import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OpenAiResponsesTruncation = "auto" | "disabled";

export const OpenAiResponsesTruncationSchema: TypedSchema<OpenAiResponsesTruncation> = typed<OpenAiResponsesTruncation>(union(
  literal("auto"),
  literal("disabled"),
));

/**
 * Enum values for OpenAiResponsesTruncation.
 * Use these constants for type-safe comparisons.
 */
export const OpenAiResponsesTruncation = {
  AUTO: "auto" as const,
  DISABLED: "disabled" as const,
} as const;