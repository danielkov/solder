import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestMandateOptions } from './DefaultPostCheckoutSessionsRequestMandateOptions';
import { DefaultPostCheckoutSessionsRequestMandateOptionsSchema } from './DefaultPostCheckoutSessionsRequestMandateOptions';
/**
 * payment_intent_payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestBacsDebitObject {
  /**
   * payment_method_options_mandate_options_param
   */
  mandateOptions?: DefaultPostCheckoutSessionsRequestMandateOptions;
  setupFutureUsage?: string;
  targetDate?: string;
}

export const DefaultPostPaymentIntentsRequestBacsDebitObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestBacsDebitObject> = typed<DefaultPostPaymentIntentsRequestBacsDebitObject>(object({
  get mandateOptions() { return optional(DefaultPostCheckoutSessionsRequestMandateOptionsSchema) },
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
}));