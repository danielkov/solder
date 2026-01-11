import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FeeRefund } from './FeeRefund';
import { FeeRefundSchema } from './FeeRefund';
/**
 * FeeRefundList
 *
 * 
 */
export interface GetApplicationFeesIdRefundsResponse {
  /**
   * Details about each object.
   */
  data: Array<FeeRefund>;
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

export const GetApplicationFeesIdRefundsResponseSchema: TypedSchema<GetApplicationFeesIdRefundsResponse> = typed<GetApplicationFeesIdRefundsResponse>(object({
  data: array(FeeRefundSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));