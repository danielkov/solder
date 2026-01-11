import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { StopUnionUnion } from './StopUnionUnion';
import { StopUnionUnionSchema } from './StopUnionUnion';
export type StopUnion = StopUnionUnion | any | null;

export const StopUnionSchema: TypedSchema<StopUnion> = typed<StopUnion>(union(StopUnionUnionSchema, nullable(unknown())));