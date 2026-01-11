import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate } from './PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate';
import { PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimateSchema } from './PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate';
import type { PostCheckoutSessionsRequestShippingOptionsItemFixedAmount } from './PostCheckoutSessionsRequestShippingOptionsItemFixedAmount';
import { PostCheckoutSessionsRequestShippingOptionsItemFixedAmountSchema } from './PostCheckoutSessionsRequestShippingOptionsItemFixedAmount';
/**
 * method_params
 */
export interface PostCheckoutSessionsRequestShippingOptionsItemShippingRateData {
  /**
   * delivery_estimate
   */
  deliveryEstimate?: PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate;
  displayName: string;
  /**
   * fixed_amount
   */
  fixedAmount?: PostCheckoutSessionsRequestShippingOptionsItemFixedAmount;
  metadata?: PostAccountsRequestMetadataObject;
  taxBehavior?: string;
  taxCode?: string;
  type?: string;
}

export const PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema: TypedSchema<PostCheckoutSessionsRequestShippingOptionsItemShippingRateData> = typed<PostCheckoutSessionsRequestShippingOptionsItemShippingRateData>(object({
  get deliveryEstimate() { return optional(PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimateSchema) },
  displayName: string(),
  get fixedAmount() { return optional(PostCheckoutSessionsRequestShippingOptionsItemFixedAmountSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  taxBehavior: optional(string()),
  taxCode: optional(string()),
  type: optional(string()),
}));