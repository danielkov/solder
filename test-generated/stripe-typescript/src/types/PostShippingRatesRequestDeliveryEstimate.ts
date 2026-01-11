import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemMaximum } from './PostCheckoutSessionsRequestShippingOptionsItemMaximum';
import { PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema } from './PostCheckoutSessionsRequestShippingOptionsItemMaximum';
/**
 * delivery_estimate
 *
 * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
 */
export interface PostShippingRatesRequestDeliveryEstimate {
  /**
   * delivery_estimate_bound
   */
  maximum?: PostCheckoutSessionsRequestShippingOptionsItemMaximum;
  /**
   * delivery_estimate_bound
   */
  minimum?: PostCheckoutSessionsRequestShippingOptionsItemMaximum;
}

export const PostShippingRatesRequestDeliveryEstimateSchema: TypedSchema<PostShippingRatesRequestDeliveryEstimate> = typed<PostShippingRatesRequestDeliveryEstimate>(object({
  get maximum() { return optional(PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema) },
  get minimum() { return optional(PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema) },
}));