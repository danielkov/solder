import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * automatic_tax_config
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax {
  enabled: boolean;
  /**
   * param
   */
  liability?: PostCheckoutSessionsRequestLiability;
}

export const PostInvoicesCreatePreviewRequestPhasesItemAutomaticTaxSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax> = typed<PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));