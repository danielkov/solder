import { TypedSchema, array, object, typed, unknown } from '@speakeasy-api/tonic';

import type { PaginationMeta } from './PaginationMeta';
import { PaginationMetaSchema } from './PaginationMeta';
export interface PaginatedResponse {
  items: Array<any>;
  pagination: PaginationMeta;
}

export const PaginatedResponseSchema: TypedSchema<PaginatedResponse> = typed<PaginatedResponse>(object({
  items: array(unknown()),
  pagination: PaginationMetaSchema,
}));