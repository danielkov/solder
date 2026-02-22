import { nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type SeedUnion = number | any | null;

export const SeedUnionSchema: TypedSchema<SeedUnion> = typed<SeedUnion>(union(number(), nullable(unknown())));
