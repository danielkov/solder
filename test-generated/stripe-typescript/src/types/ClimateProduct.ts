import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ClimateSupplier } from './ClimateSupplier';
import { ClimateSupplierSchema } from './ClimateSupplier';
import type { CurrentPricesPerMetricTonProperty } from './CurrentPricesPerMetricTonProperty';
import { CurrentPricesPerMetricTonPropertySchema } from './CurrentPricesPerMetricTonProperty';
/**
 * ClimateRemovalsProducts
 *
 * A Climate product represents a type of carbon removal unit available for reservation.
You can retrieve it to see the current price and availability.
 */
export interface ClimateProduct {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Current prices for a metric ton of carbon removal in a currency's smallest unit.
   */
  currentPricesPerMetricTon: CurrentPricesPerMetricTonProperty;
  /**
   * The year in which the carbon removal is expected to be delivered.
   */
  deliveryYear?: number;
  /**
   * Unique identifier for the object. For convenience, Climate product IDs are human-readable strings
that start with `climsku_`. See [carbon removal inventory](https://stripe.com/docs/climate/orders/carbon-removal-inventory)
for a list of available carbon removal products.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The quantity of metric tons available for reservation.
   */
  metricTonsAvailable: string;
  /**
   * The Climate product's name.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The carbon removal suppliers that fulfill orders for this Climate product.
   */
  suppliers: Array<ClimateSupplier>;
}

export const ClimateProductSchema: TypedSchema<ClimateProduct> = typed<ClimateProduct>(object({
  created: number(),
  currentPricesPerMetricTon: CurrentPricesPerMetricTonPropertySchema,
  deliveryYear: optional(number()),
  id: string(),
  livemode: boolean(),
  metricTonsAvailable: string(),
  name: string(),
  object: string(),
  suppliers: array(ClimateSupplierSchema),
}));