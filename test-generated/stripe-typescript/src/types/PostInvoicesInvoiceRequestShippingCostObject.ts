import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemShippingRateData } from './PostCheckoutSessionsRequestShippingOptionsItemShippingRateData';
import { PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema } from './PostCheckoutSessionsRequestShippingOptionsItemShippingRateData';
/**
 * shipping_cost
 */
export interface PostInvoicesInvoiceRequestShippingCostObject {
  shippingRate?: string;
  /**
   * method_params
   */
  shippingRateData?: PostCheckoutSessionsRequestShippingOptionsItemShippingRateData;
}

export const PostInvoicesInvoiceRequestShippingCostObjectSchema: TypedSchema<PostInvoicesInvoiceRequestShippingCostObject> = typed<PostInvoicesInvoiceRequestShippingCostObject>(object({
  shippingRate: optional(string()),
  get shippingRateData() { return optional(PostCheckoutSessionsRequestShippingOptionsItemShippingRateDataSchema) },
}));