import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Price } from './Price';
import { PriceSchema } from './Price';
/**
 * SearchResult
 *
 * 
 */
export interface GetPricesSearchResponse {
  data: Array<Price>;
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

export const GetPricesSearchResponseSchema: TypedSchema<GetPricesSearchResponse> = typed<GetPricesSearchResponse>(object({
  data: array(PriceSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));