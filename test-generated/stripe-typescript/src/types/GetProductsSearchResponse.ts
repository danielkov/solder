import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Product } from './Product';
import { ProductSchema } from './Product';
/**
 * SearchResult
 *
 * 
 */
export interface GetProductsSearchResponse {
  data: Array<Product>;
  hasMore: boolean;
  nextPage?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The total number of objects that match the query, only accurate up to 10,000.
   */
  totalCount?: number;
  url: string;
}

export const GetProductsSearchResponseSchema: TypedSchema<GetProductsSearchResponse> = typed<GetProductsSearchResponse>(object({
  data: array(ProductSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));