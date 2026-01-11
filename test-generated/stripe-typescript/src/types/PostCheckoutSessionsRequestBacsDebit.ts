import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestMandateOptions } from './DefaultPostCheckoutSessionsRequestMandateOptions';
import { DefaultPostCheckoutSessionsRequestMandateOptionsSchema } from './DefaultPostCheckoutSessionsRequestMandateOptions';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestBacsDebit {
  /**
   * payment_method_options_mandate_options_param
   */
  mandateOptions?: DefaultPostCheckoutSessionsRequestMandateOptions;
  setupFutureUsage?: string;
  targetDate?: string;
}

export const PostCheckoutSessionsRequestBacsDebitSchema: TypedSchema<PostCheckoutSessionsRequestBacsDebit> = typed<PostCheckoutSessionsRequestBacsDebit>(object({
  get mandateOptions() { return optional(DefaultPostCheckoutSessionsRequestMandateOptionsSchema) },
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
}));