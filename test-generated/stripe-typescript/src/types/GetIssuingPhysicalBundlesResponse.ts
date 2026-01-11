import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IssuingPhysicalBundle } from './IssuingPhysicalBundle';
import { IssuingPhysicalBundleSchema } from './IssuingPhysicalBundle';
/**
 * IssuingPhysicalBundleList
 *
 * 
 */
export interface GetIssuingPhysicalBundlesResponse {
  data: Array<IssuingPhysicalBundle>;
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

export const GetIssuingPhysicalBundlesResponseSchema: TypedSchema<GetIssuingPhysicalBundlesResponse> = typed<GetIssuingPhysicalBundlesResponse>(object({
  data: array(IssuingPhysicalBundleSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));