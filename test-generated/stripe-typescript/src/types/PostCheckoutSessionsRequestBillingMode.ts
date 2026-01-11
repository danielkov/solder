import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestFlexible } from './PostCheckoutSessionsRequestFlexible';
import { PostCheckoutSessionsRequestFlexibleSchema } from './PostCheckoutSessionsRequestFlexible';
/**
 * billing_mode
 */
export interface PostCheckoutSessionsRequestBillingMode {
  /**
   * flexible_params
   */
  flexible?: PostCheckoutSessionsRequestFlexible;
  type: string;
}

export const PostCheckoutSessionsRequestBillingModeSchema: TypedSchema<PostCheckoutSessionsRequestBillingMode> = typed<PostCheckoutSessionsRequestBillingMode>(object({
  get flexible() { return optional(PostCheckoutSessionsRequestFlexibleSchema) },
  type: string(),
}));