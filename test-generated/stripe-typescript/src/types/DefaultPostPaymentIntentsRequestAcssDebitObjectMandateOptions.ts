import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * payment_intent_payment_method_options_mandate_options_param
 */
export interface DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions {
  customMandateUrl?: PostAccountsRequestSupportUrl;
  intervalDescription?: string;
  paymentSchedule?: string;
  transactionType?: string;
}

export const DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptionsSchema: TypedSchema<DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions> = typed<DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions>(object({
  get customMandateUrl() { return optional(PostAccountsRequestSupportUrlSchema) },
  intervalDescription: optional(string()),
  paymentSchedule: optional(string()),
  transactionType: optional(string()),
}));