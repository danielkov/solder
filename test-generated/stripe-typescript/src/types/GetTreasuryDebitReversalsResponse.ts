import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryDebitReversal } from './TreasuryDebitReversal';
import { TreasuryDebitReversalSchema } from './TreasuryDebitReversal';
/**
 * TreasuryReceivedDebitsResourceDebitReversalList
 *
 * 
 */
export interface GetTreasuryDebitReversalsResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryDebitReversal>;
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

export const GetTreasuryDebitReversalsResponseSchema: TypedSchema<GetTreasuryDebitReversalsResponse> = typed<GetTreasuryDebitReversalsResponse>(object({
  data: array(TreasuryDebitReversalSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));