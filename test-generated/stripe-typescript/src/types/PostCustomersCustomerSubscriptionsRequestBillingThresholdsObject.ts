import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * billing_thresholds_param
 */
export interface PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject {
  amountGte?: number;
  resetBillingCycleAnchor?: boolean;
}

export const PostCustomersCustomerSubscriptionsRequestBillingThresholdsObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject> = typed<PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject>(object({
  amountGte: optional(number()),
  resetBillingCycleAnchor: optional(boolean()),
}));