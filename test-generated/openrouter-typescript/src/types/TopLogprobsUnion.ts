import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type TopLogprobsUnion = number | any | null;

export const TopLogprobsUnionSchema: TypedSchema<TopLogprobsUnion> = typed<TopLogprobsUnion>(union(number(), nullable(unknown())));