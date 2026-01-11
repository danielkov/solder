import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IssuingToken } from './IssuingToken';
import { IssuingTokenSchema } from './IssuingToken';
/**
 * IssuingNetworkTokenList
 *
 * 
 */
export interface GetIssuingTokensResponse {
  data: Array<IssuingToken>;
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

export const GetIssuingTokensResponseSchema: TypedSchema<GetIssuingTokensResponse> = typed<GetIssuingTokensResponse>(object({
  data: array(IssuingTokenSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));