import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions } from './DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions';
import { DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptionsSchema } from './DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions';
/**
 * payment_intent_payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestAcssDebitObject {
  /**
   * payment_intent_payment_method_options_mandate_options_param
   */
  mandateOptions?: DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions;
  setupFutureUsage?: string;
  targetDate?: string;
  verificationMethod?: string;
}

export const DefaultPostPaymentIntentsRequestAcssDebitObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestAcssDebitObject> = typed<DefaultPostPaymentIntentsRequestAcssDebitObject>(object({
  get mandateOptions() { return optional(DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptionsSchema) },
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
  verificationMethod: optional(string()),
}));