import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostSubscriptionSchedulesScheduleCancelRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
   */
  invoiceNow?: boolean;
  /**
   * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.
   */
  prorate?: boolean;
}

export const PostSubscriptionSchedulesScheduleCancelRequestSchema: TypedSchema<PostSubscriptionSchedulesScheduleCancelRequest> = typed<PostSubscriptionSchedulesScheduleCancelRequest>(object({
  expand: optional(array(string())),
  invoiceNow: optional(boolean()),
  prorate: optional(boolean()),
}));