import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { StopUnion2Union } from './StopUnion2Union';
import { StopUnion2UnionSchema } from './StopUnion2Union';
export type StopUnion2 = StopUnion2Union | any | null;

export const StopUnion2Schema: TypedSchema<StopUnion2> = typed<StopUnion2>(union(StopUnion2UnionSchema, nullable(unknown())));