import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
/**
 * SearchResult
 *
 * 
 */
export interface GetChargesSearchResponse {
  data: Array<Charge>;
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

export const GetChargesSearchResponseSchema: TypedSchema<GetChargesSearchResponse> = typed<GetChargesSearchResponse>(object({
  data: array(ChargeSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));