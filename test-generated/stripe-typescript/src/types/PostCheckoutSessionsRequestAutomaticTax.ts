import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_params
 *
 * Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions.
 */
export interface PostCheckoutSessionsRequestAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostCheckoutSessionsRequestAutomaticTaxSchema: TypedSchema<PostCheckoutSessionsRequestAutomaticTax> = typed<PostCheckoutSessionsRequestAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));