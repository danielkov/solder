import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type FrequencyPenaltyUnion = number | any | null;

export const FrequencyPenaltyUnionSchema: TypedSchema<FrequencyPenaltyUnion> = typed<FrequencyPenaltyUnion>(union(number(), nullable(unknown())));