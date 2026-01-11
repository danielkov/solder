import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FeatureOrRef } from './FeatureOrRef';
import { FeatureOrRefSchema } from './FeatureOrRef';
/**
 * ActiveEntitlement
 *
 * An active entitlement describes access to a feature for a customer.
 */
export interface EntitlementsActiveEntitlement {
  /**
   * The [Feature](https://stripe.com/docs/api/entitlements/feature) that the customer is entitled to.
   */
  feature: FeatureOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A unique key you provide as your own system identifier. This may be up to 80 characters.
   */
  lookupKey: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const EntitlementsActiveEntitlementSchema: TypedSchema<EntitlementsActiveEntitlement> = typed<EntitlementsActiveEntitlement>(object({
  feature: FeatureOrRefSchema,
  id: string(),
  livemode: boolean(),
  lookupKey: string(),
  object: string(),
}));