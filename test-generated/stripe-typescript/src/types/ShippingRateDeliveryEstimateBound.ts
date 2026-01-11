import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ShippingRateDeliveryEstimateBound
 *
 * 
 */
export interface ShippingRateDeliveryEstimateBound {
  /**
   * A unit of time.
   */
  unit: string;
  /**
   * Must be greater than 0.
   */
  value: number;
}

export const ShippingRateDeliveryEstimateBoundSchema: TypedSchema<ShippingRateDeliveryEstimateBound> = typed<ShippingRateDeliveryEstimateBound>(object({
  unit: string(),
  value: number(),
}));