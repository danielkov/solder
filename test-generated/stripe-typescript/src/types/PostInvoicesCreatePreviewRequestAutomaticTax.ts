import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_param
 *
 * Settings for automatic tax lookup for this invoice preview.
 */
export interface PostInvoicesCreatePreviewRequestAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostInvoicesCreatePreviewRequestAutomaticTaxSchema: TypedSchema<PostInvoicesCreatePreviewRequestAutomaticTax> = typed<PostInvoicesCreatePreviewRequestAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));