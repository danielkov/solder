import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { EntitlementsActiveEntitlement } from './EntitlementsActiveEntitlement';
import { EntitlementsActiveEntitlementSchema } from './EntitlementsActiveEntitlement';
/**
 * EntitlementsResourceCustomerEntitlementList
 *
 * 
 */
export interface GetEntitlementsActiveEntitlementsResponse {
  data: Array<EntitlementsActiveEntitlement>;
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

export const GetEntitlementsActiveEntitlementsResponseSchema: TypedSchema<GetEntitlementsActiveEntitlementsResponse> = typed<GetEntitlementsActiveEntitlementsResponse>(object({
  data: array(EntitlementsActiveEntitlementSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));