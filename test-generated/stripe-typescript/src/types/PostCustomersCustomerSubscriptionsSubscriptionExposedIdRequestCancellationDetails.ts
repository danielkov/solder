import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * cancellation_details_param
 *
 * Details about why this subscription was cancelled
 */
export interface PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails {
  comment?: PostAccountsRequestPaymentsPricing;
  feedback?: string;
}

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetailsSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails>(object({
  get comment() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  feedback: optional(string()),
}));