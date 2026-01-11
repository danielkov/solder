import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SourceUnionObject } from './SourceUnionObject';
import { SourceUnionObjectSchema } from './SourceUnionObject';
import type { SourceUnionObject2 } from './SourceUnionObject2';
import { SourceUnionObject2Schema } from './SourceUnionObject2';
export type SourceUnion = SourceUnionObject | SourceUnionObject2;

export const SourceUnionSchema: TypedSchema<SourceUnion> = typed<SourceUnion>(union(SourceUnionObjectSchema, SourceUnionObject2Schema));