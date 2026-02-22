import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject } from './PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject';
import { PostCustomersCustomerSubscriptionsRequestBillingThresholdsObjectSchema } from './PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject';
/**
 * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
 */
export type PostCustomersCustomerSubscriptionsRequestBillingThresholds = PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject | string;

export const PostCustomersCustomerSubscriptionsRequestBillingThresholdsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestBillingThresholds> = typed<PostCustomersCustomerSubscriptionsRequestBillingThresholds>(union(PostCustomersCustomerSubscriptionsRequestBillingThresholdsObjectSchema, string()));
