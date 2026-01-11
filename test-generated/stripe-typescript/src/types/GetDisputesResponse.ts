import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Dispute } from './Dispute';
import { DisputeSchema } from './Dispute';
/**
 * DisputeList
 *
 * 
 */
export interface GetDisputesResponse {
  data: Array<Dispute>;
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

export const GetDisputesResponseSchema: TypedSchema<GetDisputesResponse> = typed<GetDisputesResponse>(object({
  data: array(DisputeSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));