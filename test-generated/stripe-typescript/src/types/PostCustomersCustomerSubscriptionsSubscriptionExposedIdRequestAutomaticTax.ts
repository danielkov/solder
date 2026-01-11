import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_config
 *
 * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
 */
export interface PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTaxSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));