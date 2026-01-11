import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestMandateOptions } from './PostCheckoutSessionsRequestMandateOptions';
import { PostCheckoutSessionsRequestMandateOptionsSchema } from './PostCheckoutSessionsRequestMandateOptions';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestAcssDebit {
  currency?: string;
  /**
   * mandate_options_param
   */
  mandateOptions?: PostCheckoutSessionsRequestMandateOptions;
  setupFutureUsage?: string;
  targetDate?: string;
  verificationMethod?: string;
}

export const PostCheckoutSessionsRequestAcssDebitSchema: TypedSchema<PostCheckoutSessionsRequestAcssDebit> = typed<PostCheckoutSessionsRequestAcssDebit>(object({
  currency: optional(string()),
  get mandateOptions() { return optional(PostCheckoutSessionsRequestMandateOptionsSchema) },
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
  verificationMethod: optional(string()),
}));