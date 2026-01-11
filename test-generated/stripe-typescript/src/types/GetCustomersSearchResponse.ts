import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
/**
 * SearchResult
 *
 * 
 */
export interface GetCustomersSearchResponse {
  data: Array<Customer>;
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

export const GetCustomersSearchResponseSchema: TypedSchema<GetCustomersSearchResponse> = typed<GetCustomersSearchResponse>(object({
  data: array(CustomerSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));