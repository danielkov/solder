import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingCreditGrantsRequestMonetary } from './PostBillingCreditGrantsRequestMonetary';
import { PostBillingCreditGrantsRequestMonetarySchema } from './PostBillingCreditGrantsRequestMonetary';
/**
 * amount_param
 *
 * Amount of this credit grant.
 */
export interface PostBillingCreditGrantsRequestAmount {
  /**
   * monetary_amount_param
   */
  monetary?: PostBillingCreditGrantsRequestMonetary;
  type: string;
}

export const PostBillingCreditGrantsRequestAmountSchema: TypedSchema<PostBillingCreditGrantsRequestAmount> = typed<PostBillingCreditGrantsRequestAmount>(object({
  get monetary() { return optional(PostBillingCreditGrantsRequestMonetarySchema) },
  type: string(),
}));