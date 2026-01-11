import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Capability } from './Capability';
import { CapabilitySchema } from './Capability';
/**
 * ListAccountCapability
 *
 * 
 */
export interface GetAccountsAccountCapabilitiesResponse {
  data: Array<Capability>;
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

export const GetAccountsAccountCapabilitiesResponseSchema: TypedSchema<GetAccountsAccountCapabilitiesResponse> = typed<GetAccountsAccountCapabilitiesResponse>(object({
  data: array(CapabilitySchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));