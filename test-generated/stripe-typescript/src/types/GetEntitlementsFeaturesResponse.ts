import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { EntitlementsFeature } from './EntitlementsFeature';
import { EntitlementsFeatureSchema } from './EntitlementsFeature';
/**
 * EntitlementsResourceFeatureList
 *
 * 
 */
export interface GetEntitlementsFeaturesResponse {
  data: Array<EntitlementsFeature>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetEntitlementsFeaturesResponseSchema: TypedSchema<GetEntitlementsFeaturesResponse> = typed<GetEntitlementsFeaturesResponse>(object({
  data: array(EntitlementsFeatureSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));