import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { ClimateRemovalsLocation } from './ClimateRemovalsLocation';
import { ClimateRemovalsLocationSchema } from './ClimateRemovalsLocation';
/**
 * ClimateRemovalsSuppliers
 *
 * A supplier of carbon removal.
 */
export interface ClimateSupplier {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Link to a webpage to learn more about the supplier.
   */
  infoUrl: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The locations in which this supplier operates.
   */
  locations: Array<ClimateRemovalsLocation>;
  /**
   * Name of this carbon removal supplier.
   */
  name: string;
  /**
   * String representing the object’s type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The scientific pathway used for carbon removal.
   */
  removalPathway: string;
}

export const ClimateSupplierSchema: TypedSchema<ClimateSupplier> = typed<ClimateSupplier>(object({
  id: string(),
  infoUrl: string(),
  livemode: boolean(),
  locations: array(ClimateRemovalsLocationSchema),
  name: string(),
  object: string(),
  removalPathway: string(),
}));