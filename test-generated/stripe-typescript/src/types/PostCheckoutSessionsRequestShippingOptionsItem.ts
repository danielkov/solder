import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemShippingRateData } from './PostCheckoutSessionsRequestShippingOptionsItemShippingRateData';
import { PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema } from './PostCheckoutSessionsRequestShippingOptionsItemShippingRateData';
/**
 * shipping_option_params
 */
export interface PostCheckoutSessionsRequestShippingOptionsItem {
  shippingRate?: string;
  /**
   * method_params
   */
  shippingRateData?: PostCheckoutSessionsRequestShippingOptionsItemShippingRateData;
}

export const PostCheckoutSessionsRequestShippingOptionsItemSchema: TypedSchema<PostCheckoutSessionsRequestShippingOptionsItem> = typed<PostCheckoutSessionsRequestShippingOptionsItem>(object({
  shippingRate: optional(string()),
  get shippingRateData() { return optional(PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema) },
}));