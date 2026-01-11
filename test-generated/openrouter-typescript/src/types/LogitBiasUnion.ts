import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { LogitBiasUnionObject } from './LogitBiasUnionObject';
import { LogitBiasUnionObjectSchema } from './LogitBiasUnionObject';
export type LogitBiasUnion = LogitBiasUnionObject | any | null;

export const LogitBiasUnionSchema: TypedSchema<LogitBiasUnion> = typed<LogitBiasUnion>(union(LogitBiasUnionObjectSchema, nullable(unknown())));