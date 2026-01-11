import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type MaxCompletionTokensUnion = number | any | null;

export const MaxCompletionTokensUnionSchema: TypedSchema<MaxCompletionTokensUnion> = typed<MaxCompletionTokensUnion>(union(number(), nullable(unknown())));