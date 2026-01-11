import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type SeedUnion = number | any | null;

export const SeedUnionSchema: TypedSchema<SeedUnion> = typed<SeedUnion>(union(number(), nullable(unknown())));