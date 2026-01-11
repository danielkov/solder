import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_param
 *
 * Settings for automatic tax lookup for this invoice.
 */
export interface PostInvoicesRequestAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostInvoicesRequestAutomaticTaxSchema: TypedSchema<PostInvoicesRequestAutomaticTax> = typed<PostInvoicesRequestAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));