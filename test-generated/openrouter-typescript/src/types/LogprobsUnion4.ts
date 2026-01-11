import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type LogprobsUnion4 = number | any | null;

export const LogprobsUnion4Schema: TypedSchema<LogprobsUnion4> = typed<LogprobsUnion4>(union(number(), nullable(unknown())));