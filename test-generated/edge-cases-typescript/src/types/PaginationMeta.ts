import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
export interface PaginationMeta {
  limit?: number;
  page?: number;
  total?: number;
}

export const PaginationMetaSchema: TypedSchema<PaginationMeta> = typed<PaginationMeta>(object({
  limit: optional(number()),
  page: optional(number()),
  total: optional(number()),
}));