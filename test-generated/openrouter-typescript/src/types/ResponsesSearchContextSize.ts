import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type ResponsesSearchContextSize = "low" | "medium" | "high";

export const ResponsesSearchContextSizeSchema: TypedSchema<ResponsesSearchContextSize> = typed<ResponsesSearchContextSize>(union(
  literal("low"),
  literal("medium"),
  literal("high"),
));

/**
 * Enum values for ResponsesSearchContextSize.
 * Use these constants for type-safe comparisons.
 */
export const ResponsesSearchContextSize = {
  LOW: "low" as const,
  MEDIUM: "medium" as const,
  HIGH: "high" as const,
} as const;