import { TypedSchema, array, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { LogitBiasUnionObject } from './LogitBiasUnionObject';
import { LogitBiasUnionObjectSchema } from './LogitBiasUnionObject';
export type TopLogprobsUnion2 = Array<LogitBiasUnionObject> | any | null;

export const TopLogprobsUnion2Schema: TypedSchema<TopLogprobsUnion2> = typed<TopLogprobsUnion2>(union(array(LogitBiasUnionObjectSchema), nullable(unknown())));