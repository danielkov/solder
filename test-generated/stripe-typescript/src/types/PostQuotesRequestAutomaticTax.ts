import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_param
 *
 * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
 */
export interface PostQuotesRequestAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostQuotesRequestAutomaticTaxSchema: TypedSchema<PostQuotesRequestAutomaticTax> = typed<PostQuotesRequestAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));