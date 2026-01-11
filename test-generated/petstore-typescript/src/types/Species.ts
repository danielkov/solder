import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type Species = "dog" | "cat" | "bird" | "rabbit" | "hamster" | "guinea_pig" | "fish" | "reptile" | "other";

export const SpeciesSchema: TypedSchema<Species> = typed<Species>(union(
  literal("dog"),
  literal("cat"),
  literal("bird"),
  literal("rabbit"),
  literal("hamster"),
  literal("guinea_pig"),
  literal("fish"),
  literal("reptile"),
  literal("other"),
));

/**
 * Enum values for Species.
 * Use these constants for type-safe comparisons.
 */
export const Species = {
  DOG: "dog" as const,
  CAT: "cat" as const,
  BIRD: "bird" as const,
  RABBIT: "rabbit" as const,
  HAMSTER: "hamster" as const,
  GUINEA_PIG: "guinea_pig" as const,
  FISH: "fish" as const,
  REPTILE: "reptile" as const,
  OTHER: "other" as const,
} as const;