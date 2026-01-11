import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions } from './PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions';
import { PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptionsSchema } from './PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions';
/**
 * invoice_payment_method_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestAcssDebitObject {
  /**
   * mandate_options_param
   */
  mandateOptions?: PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions;
  verificationMethod?: string;
}

export const PostCustomersCustomerSubscriptionsRequestAcssDebitObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAcssDebitObject> = typed<PostCustomersCustomerSubscriptionsRequestAcssDebitObject>(object({
  get mandateOptions() { return optional(PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptionsSchema) },
  verificationMethod: optional(string()),
}));