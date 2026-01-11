import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions {
  transactionType?: string;
}

export const PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptionsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions> = typed<PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions>(object({
  transactionType: optional(string()),
}));