import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject } from './PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject';
import { PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObjectSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject';
/**
 * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
 */
export type PostSubscriptionItemsRequestBillingThresholds = PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject | string;

export const PostSubscriptionItemsRequestBillingThresholdsSchema: TypedSchema<PostSubscriptionItemsRequestBillingThresholds> = typed<PostSubscriptionItemsRequestBillingThresholds>(union(PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObjectSchema, string()));
