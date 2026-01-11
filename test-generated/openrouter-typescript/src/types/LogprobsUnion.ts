import { TypedSchema, boolean, nullable, typed, union, unknown } from '@speakeasy-api/tonic';
export type LogprobsUnion = boolean | any | null;

export const LogprobsUnionSchema: TypedSchema<LogprobsUnion> = typed<LogprobsUnion>(union(boolean(), nullable(unknown())));