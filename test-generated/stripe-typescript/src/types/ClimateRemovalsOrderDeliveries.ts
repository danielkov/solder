import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ClimateRemovalsLocation } from './ClimateRemovalsLocation';
import { ClimateRemovalsLocationSchema } from './ClimateRemovalsLocation';
import type { ClimateSupplier } from './ClimateSupplier';
import { ClimateSupplierSchema } from './ClimateSupplier';
/**
 * ClimateRemovalsOrderDeliveries
 *
 * The delivery of a specified quantity of carbon for an order.
 */
export interface ClimateRemovalsOrderDeliveries {
  /**
   * Time at which the delivery occurred. Measured in seconds since the Unix epoch.
   */
  deliveredAt: number;
  /**
   * Specific location of this delivery.
   */
  location?: ClimateRemovalsLocation;
  /**
   * Quantity of carbon removal supplied by this delivery.
   */
  metricTons: string;
  /**
   * Once retired, a URL to the registry entry for the tons from this delivery.
   */
  registryUrl?: string;
  /**
   * ClimateRemovalsSuppliers
   *
   * A supplier of carbon removal.
   */
  supplier: ClimateSupplier;
}

export const ClimateRemovalsOrderDeliveriesSchema: TypedSchema<ClimateRemovalsOrderDeliveries> = typed<ClimateRemovalsOrderDeliveries>(object({
  deliveredAt: number(),
  get location() { return optional(ClimateRemovalsLocationSchema) },
  metricTons: string(),
  registryUrl: optional(string()),
  supplier: ClimateSupplierSchema,
}));