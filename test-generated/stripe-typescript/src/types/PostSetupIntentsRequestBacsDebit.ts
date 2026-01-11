import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestMandateOptions } from './DefaultPostCheckoutSessionsRequestMandateOptions';
import { DefaultPostCheckoutSessionsRequestMandateOptionsSchema } from './DefaultPostCheckoutSessionsRequestMandateOptions';
/**
 * setup_intent_payment_method_options_param
 */
export interface PostSetupIntentsRequestBacsDebit {
  /**
   * payment_method_options_mandate_options_param
   */
  mandateOptions?: DefaultPostCheckoutSessionsRequestMandateOptions;
}

export const PostSetupIntentsRequestBacsDebitSchema: TypedSchema<PostSetupIntentsRequestBacsDebit> = typed<PostSetupIntentsRequestBacsDebit>(object({
  get mandateOptions() { return optional(DefaultPostCheckoutSessionsRequestMandateOptionsSchema) },
}));