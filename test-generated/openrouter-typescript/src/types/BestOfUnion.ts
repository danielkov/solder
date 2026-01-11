import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type BestOfUnion = number | any | null;

export const BestOfUnionSchema: TypedSchema<BestOfUnion> = typed<BestOfUnion>(union(number(), nullable(unknown())));