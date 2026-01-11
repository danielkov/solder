import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IssuingPhysicalBundleFeatures } from './IssuingPhysicalBundleFeatures';
import { IssuingPhysicalBundleFeaturesSchema } from './IssuingPhysicalBundleFeatures';
/**
 * IssuingPhysicalBundle
 *
 * A Physical Bundle represents the bundle of physical items - card stock, carrier letter, and envelope - that is shipped to a cardholder when you create a physical card.
 */
export interface IssuingPhysicalBundle {
  /**
   * IssuingPhysicalBundleFeatures
   *
   * 
   */
  features: IssuingPhysicalBundleFeatures;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Friendly display name.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Whether this physical bundle can be used to create cards.
   */
  status: string;
  /**
   * Whether this physical bundle is a standard Stripe offering or custom-made for you.
   */
  type: string;
}

export const IssuingPhysicalBundleSchema: TypedSchema<IssuingPhysicalBundle> = typed<IssuingPhysicalBundle>(object({
  features: IssuingPhysicalBundleFeaturesSchema,
  id: string(),
  livemode: boolean(),
  name: string(),
  object: string(),
  status: string(),
  type: string(),
}));