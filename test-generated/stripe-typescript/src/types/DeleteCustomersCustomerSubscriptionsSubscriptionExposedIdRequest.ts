import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Can be set to `true` if `at_period_end` is not set to `true`. Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
   */
  invoiceNow?: boolean;
  /**
   * Can be set to `true` if `at_period_end` is not set to `true`. Will generate a proration invoice item that credits remaining unused time until the subscription period end.
   */
  prorate?: boolean;
}

export const DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequestSchema: TypedSchema<DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequest> = typed<DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequest>(object({
  expand: optional(array(string())),
  invoiceNow: optional(boolean()),
  prorate: optional(boolean()),
}));