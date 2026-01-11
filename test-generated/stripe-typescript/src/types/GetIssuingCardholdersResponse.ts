import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IssuingCardholder } from './IssuingCardholder';
import { IssuingCardholderSchema } from './IssuingCardholder';
/**
 * IssuingCardholderList
 *
 * 
 */
export interface GetIssuingCardholdersResponse {
  data: Array<IssuingCardholder>;
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

export const GetIssuingCardholdersResponseSchema: TypedSchema<GetIssuingCardholdersResponse> = typed<GetIssuingCardholdersResponse>(object({
  data: array(IssuingCardholderSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));