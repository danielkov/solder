import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorization } from './IssuingAuthorization';
import { IssuingAuthorizationSchema } from './IssuingAuthorization';
/**
 * IssuingAuthorizationList
 *
 * 
 */
export interface GetIssuingAuthorizationsResponse {
  data: Array<IssuingAuthorization>;
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

export const GetIssuingAuthorizationsResponseSchema: TypedSchema<GetIssuingAuthorizationsResponse> = typed<GetIssuingAuthorizationsResponse>(object({
  data: array(IssuingAuthorizationSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));