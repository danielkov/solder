import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { EntitlementsFeature } from './EntitlementsFeature';
import { EntitlementsFeatureSchema } from './EntitlementsFeature';
/**
 * ProductFeature
 *
 * A product_feature represents an attachment between a feature and a product.
When a product is purchased that has a feature attached, Stripe will create an entitlement to the feature for the purchasing customer.
 */
export interface ProductFeature {
  /**
   * Feature
   *
   * A feature represents a monetizable ability or functionality in your system.
Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
   */
  entitlementFeature: EntitlementsFeature;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const ProductFeatureSchema: TypedSchema<ProductFeature> = typed<ProductFeature>(object({
  entitlementFeature: EntitlementsFeatureSchema,
  id: string(),
  livemode: boolean(),
  object: string(),
}));