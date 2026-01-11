import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
export type MetadataUnion = MetadataProperty | any | null;

export const MetadataUnionSchema: TypedSchema<MetadataUnion> = typed<MetadataUnion>(union(MetadataPropertySchema, nullable(unknown())));