import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { ShippingRateDeliveryEstimateBound } from './ShippingRateDeliveryEstimateBound';
import { ShippingRateDeliveryEstimateBoundSchema } from './ShippingRateDeliveryEstimateBound';
/**
 * ShippingRateDeliveryEstimate
 *
 * 
 */
export interface ShippingRateDeliveryEstimate {
  /**
   * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
   */
  maximum?: ShippingRateDeliveryEstimateBound;
  /**
   * The lower bound of the estimated range. If empty, represents no lower bound.
   */
  minimum?: ShippingRateDeliveryEstimateBound;
}

export const ShippingRateDeliveryEstimateSchema: TypedSchema<ShippingRateDeliveryEstimate> = typed<ShippingRateDeliveryEstimate>(object({
  get maximum() { return optional(ShippingRateDeliveryEstimateBoundSchema) },
  get minimum() { return optional(ShippingRateDeliveryEstimateBoundSchema) },
}));