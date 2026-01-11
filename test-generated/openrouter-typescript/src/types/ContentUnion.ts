import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ContentUnionUnion } from './ContentUnionUnion';
import { ContentUnionUnionSchema } from './ContentUnionUnion';
export type ContentUnion = ContentUnionUnion | any | null;

export const ContentUnionSchema: TypedSchema<ContentUnion> = typed<ContentUnion>(union(ContentUnionUnionSchema, nullable(unknown())));