import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_config
 *
 * Automatic tax settings for this subscription.
 */
export interface PostCustomersCustomerSubscriptionsRequestAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostCustomersCustomerSubscriptionsRequestAutomaticTaxSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAutomaticTax> = typed<PostCustomersCustomerSubscriptionsRequestAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));