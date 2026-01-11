import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetailsSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails';
export interface DeleteSubscriptionsSubscriptionExposedIdRequest {
  /**
   * cancellation_details_param
   *
   * Details about why this subscription was cancelled
   */
  cancellationDetails?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items. Defaults to `false`.
   */
  invoiceNow?: boolean;
  /**
   * Will generate a proration invoice item that credits remaining unused time until the subscription period end. Defaults to `false`.
   */
  prorate?: boolean;
}

export const DeleteSubscriptionsSubscriptionExposedIdRequestSchema: TypedSchema<DeleteSubscriptionsSubscriptionExposedIdRequest> = typed<DeleteSubscriptionsSubscriptionExposedIdRequest>(object({
  get cancellationDetails() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetailsSchema) },
  expand: optional(array(string())),
  invoiceNow: optional(boolean()),
  prorate: optional(boolean()),
}));