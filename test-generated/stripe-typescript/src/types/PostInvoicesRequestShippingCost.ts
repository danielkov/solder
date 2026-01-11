import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemShippingRateData } from './PostCheckoutSessionsRequestShippingOptionsItemShippingRateData';
import { PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema } from './PostCheckoutSessionsRequestShippingOptionsItemShippingRateData';
/**
 * shipping_cost
 *
 * Settings for the cost of shipping for this invoice.
 */
export interface PostInvoicesRequestShippingCost {
  shippingRate?: string;
  /**
   * method_params
   */
  shippingRateData?: PostCheckoutSessionsRequestShippingOptionsItemShippingRateData;
}

export const PostInvoicesRequestShippingCostSchema: TypedSchema<PostInvoicesRequestShippingCost> = typed<PostInvoicesRequestShippingCost>(object({
  shippingRate: optional(string()),
  get shippingRateData() { return optional(PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema) },
}));