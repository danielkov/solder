import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Price } from './Price';
import { PriceSchema } from './Price';
/**
 * PriceList
 *
 * 
 */
export interface GetPricesResponse {
  /**
   * Details about each object.
   */
  data: Array<Price>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetPricesResponseSchema: TypedSchema<GetPricesResponse> = typed<GetPricesResponse>(object({
  data: array(PriceSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));