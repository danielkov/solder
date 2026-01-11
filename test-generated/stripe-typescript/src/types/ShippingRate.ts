import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { ShippingRateDeliveryEstimate } from './ShippingRateDeliveryEstimate';
import { ShippingRateDeliveryEstimateSchema } from './ShippingRateDeliveryEstimate';
import type { ShippingRateFixedAmount } from './ShippingRateFixedAmount';
import { ShippingRateFixedAmountSchema } from './ShippingRateFixedAmount';
import type { TaxCodeOrRef } from './TaxCodeOrRef';
import { TaxCodeOrRefSchema } from './TaxCodeOrRef';
/**
 * ShippingRate
 *
 * Shipping rates describe the price of shipping presented to your customers and
applied to a purchase. For more information, see [Charge for shipping](https://stripe.com/docs/payments/during-payment/charge-shipping).
 */
export interface ShippingRate {
  /**
   * Whether the shipping rate can be used for new purchases. Defaults to `true`.
   */
  active: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  deliveryEstimate?: ShippingRateDeliveryEstimate;
  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  displayName?: string;
  /**
   * ShippingRateFixedAmount
   *
   * 
   */
  fixedAmount?: ShippingRateFixedAmount;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: string;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  taxCode?: TaxCodeOrRef;
  /**
   * The type of calculation to use on the shipping rate.
   */
  type: string;
}

export const ShippingRateSchema: TypedSchema<ShippingRate> = typed<ShippingRate>(object({
  active: boolean(),
  created: number(),
  get deliveryEstimate() { return optional(ShippingRateDeliveryEstimateSchema) },
  displayName: optional(string()),
  get fixedAmount() { return optional(ShippingRateFixedAmountSchema) },
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  taxBehavior: optional(string()),
  get taxCode() { return optional(TaxCodeOrRefSchema) },
  type: string(),
}));