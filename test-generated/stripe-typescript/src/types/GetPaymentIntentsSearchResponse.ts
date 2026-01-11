import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntent } from './PaymentIntent';
import { PaymentIntentSchema } from './PaymentIntent';
/**
 * SearchResult
 *
 * 
 */
export interface GetPaymentIntentsSearchResponse {
  data: Array<PaymentIntent>;
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

export const GetPaymentIntentsSearchResponseSchema: TypedSchema<GetPaymentIntentsSearchResponse> = typed<GetPaymentIntentsSearchResponse>(object({
  data: array(PaymentIntentSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));