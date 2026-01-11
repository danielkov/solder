import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Links to the next and previous pages of a paginated response.
 */
export interface LinksPagination {
  next?: string;
  prev?: string;
}

export const LinksPaginationSchema: TypedSchema<LinksPagination> = typed<LinksPagination>(object({
  next: optional(string()),
  prev: optional(string()),
}));