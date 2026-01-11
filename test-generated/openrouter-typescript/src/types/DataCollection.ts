import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type DataCollection = "deny" | "allow";

export const DataCollectionSchema: TypedSchema<DataCollection> = typed<DataCollection>(union(
  literal("deny"),
  literal("allow"),
));

/**
 * Enum values for DataCollection.
 * Use these constants for type-safe comparisons.
 */
export const DataCollection = {
  DENY: "deny" as const,
  ALLOW: "allow" as const,
} as const;