import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationFee } from './ApplicationFee';
import { ApplicationFeeSchema } from './ApplicationFee';
/**
 * PlatformEarningList
 *
 * 
 */
export interface GetApplicationFeesResponse {
  data: Array<ApplicationFee>;
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

export const GetApplicationFeesResponseSchema: TypedSchema<GetApplicationFeesResponse> = typed<GetApplicationFeesResponse>(object({
  data: array(ApplicationFeeSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));