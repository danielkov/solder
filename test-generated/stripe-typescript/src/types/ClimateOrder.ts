import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ClimateRemovalsBeneficiary } from './ClimateRemovalsBeneficiary';
import { ClimateRemovalsBeneficiarySchema } from './ClimateRemovalsBeneficiary';
import type { ClimateRemovalsOrderDeliveries } from './ClimateRemovalsOrderDeliveries';
import { ClimateRemovalsOrderDeliveriesSchema } from './ClimateRemovalsOrderDeliveries';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { ProductOrRef } from './ProductOrRef';
import { ProductOrRefSchema } from './ProductOrRef';
/**
 * ClimateRemovalsOrders
 *
 * Orders represent your intent to purchase a particular Climate product. When you create an order, the
payment is deducted from your merchant balance.
 */
export interface ClimateOrder {
  /**
   * Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit.
   */
  amountFees: number;
  /**
   * Total amount of the carbon removal in the currency's smallest unit.
   */
  amountSubtotal: number;
  /**
   * Total amount of the order including fees in the currency's smallest unit.
   */
  amountTotal: number;
  /**
   * ClimateRemovalsBeneficiary
   *
   * 
   */
  beneficiary?: ClimateRemovalsBeneficiary;
  /**
   * Time at which the order was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt?: number;
  /**
   * Reason for the cancellation of this order.
   */
  cancellationReason?: string;
  /**
   * For delivered orders, a URL to a delivery certificate for the order.
   */
  certificate?: string;
  /**
   * Time at which the order was confirmed. Measured in seconds since the Unix epoch.
   */
  confirmedAt?: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order.
   */
  currency: string;
  /**
   * Time at which the order's expected_delivery_year was delayed. Measured in seconds since the Unix epoch.
   */
  delayedAt?: number;
  /**
   * Time at which the order was delivered. Measured in seconds since the Unix epoch.
   */
  deliveredAt?: number;
  /**
   * Details about the delivery of carbon removal for this order.
   */
  deliveryDetails: Array<ClimateRemovalsOrderDeliveries>;
  /**
   * The year this order is expected to be delivered.
   */
  expectedDeliveryYear: number;
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
   * Quantity of carbon removal that is included in this order.
   */
  metricTons: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Unique ID for the Climate `Product` this order is purchasing.
   */
  product: ProductOrRef;
  /**
   * Time at which the order's product was substituted for a different product. Measured in seconds since the Unix epoch.
   */
  productSubstitutedAt?: number;
  /**
   * The current status of this order.
   */
  status: string;
}

export const ClimateOrderSchema: TypedSchema<ClimateOrder> = typed<ClimateOrder>(object({
  amountFees: number(),
  amountSubtotal: number(),
  amountTotal: number(),
  get beneficiary() { return optional(ClimateRemovalsBeneficiarySchema) },
  canceledAt: optional(number()),
  cancellationReason: optional(string()),
  certificate: optional(string()),
  confirmedAt: optional(number()),
  created: number(),
  currency: string(),
  delayedAt: optional(number()),
  deliveredAt: optional(number()),
  deliveryDetails: array(ClimateRemovalsOrderDeliveriesSchema),
  expectedDeliveryYear: number(),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  metricTons: string(),
  object: string(),
  product: ProductOrRefSchema,
  productSubstitutedAt: optional(number()),
  status: string(),
}));