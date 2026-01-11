import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IdentityVerificationSession } from './IdentityVerificationSession';
import { IdentityVerificationSessionSchema } from './IdentityVerificationSession';
/**
 * GelatoVerificationSessionList
 *
 * 
 */
export interface GetIdentityVerificationSessionsResponse {
  data: Array<IdentityVerificationSession>;
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

export const GetIdentityVerificationSessionsResponseSchema: TypedSchema<GetIdentityVerificationSessionsResponse> = typed<GetIdentityVerificationSessionsResponse>(object({
  data: array(IdentityVerificationSessionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));