import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type MaxTokensUnion = number | any | null;

export const MaxTokensUnionSchema: TypedSchema<MaxTokensUnion> = typed<MaxTokensUnion>(union(number(), nullable(unknown())));