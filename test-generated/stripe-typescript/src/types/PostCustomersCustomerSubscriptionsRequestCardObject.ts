import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions } from './PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions';
import { PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptionsSchema } from './PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions';
/**
 * subscription_payment_method_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestCardObject {
  /**
   * mandate_options_param
   */
  mandateOptions?: PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions;
  network?: string;
  requestThreeDSecure?: string;
}

export const PostCustomersCustomerSubscriptionsRequestCardObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCardObject> = typed<PostCustomersCustomerSubscriptionsRequestCardObject>(object({
  get mandateOptions() { return optional(PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptionsSchema) },
  network: optional(string()),
  requestThreeDSecure: optional(string()),
}));