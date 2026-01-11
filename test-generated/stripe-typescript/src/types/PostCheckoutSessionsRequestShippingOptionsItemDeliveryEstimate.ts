import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemMaximum } from './PostCheckoutSessionsRequestShippingOptionsItemMaximum';
import { PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema } from './PostCheckoutSessionsRequestShippingOptionsItemMaximum';
/**
 * delivery_estimate
 */
export interface PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate {
  /**
   * delivery_estimate_bound
   */
  maximum?: PostCheckoutSessionsRequestShippingOptionsItemMaximum;
  /**
   * delivery_estimate_bound
   */
  minimum?: PostCheckoutSessionsRequestShippingOptionsItemMaximum;
}

export const PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimateSchema: TypedSchema<PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate> = typed<PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate>(object({
  get maximum() { return optional(PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema) },
  get minimum() { return optional(PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema) },
}));