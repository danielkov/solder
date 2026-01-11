import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrant } from './BillingCreditGrant';
import { BillingCreditGrantSchema } from './BillingCreditGrant';
/**
 * BillingCreditGrantsResourceCreditGrantList
 *
 * 
 */
export interface GetBillingCreditGrantsResponse {
  data: Array<BillingCreditGrant>;
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

export const GetBillingCreditGrantsResponseSchema: TypedSchema<GetBillingCreditGrantsResponse> = typed<GetBillingCreditGrantsResponse>(object({
  data: array(BillingCreditGrantSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));