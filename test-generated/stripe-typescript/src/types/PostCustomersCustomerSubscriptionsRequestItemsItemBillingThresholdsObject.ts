import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * item_billing_thresholds_param
 */
export interface PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject {
  usageGte: number;
}

export const PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject> = typed<PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject>(object({
  usageGte: number(),
}));