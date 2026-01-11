import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions {
  amount?: number;
  amountType?: string;
  description?: string;
}

export const PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptionsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions> = typed<PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions>(object({
  amount: optional(number()),
  amountType: optional(string()),
  description: optional(string()),
}));