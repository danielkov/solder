import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryCreditReversal } from './TreasuryCreditReversal';
import { TreasuryCreditReversalSchema } from './TreasuryCreditReversal';
/**
 * TreasuryReceivedCreditsResourceCreditReversalList
 *
 * 
 */
export interface GetTreasuryCreditReversalsResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryCreditReversal>;
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

export const GetTreasuryCreditReversalsResponseSchema: TypedSchema<GetTreasuryCreditReversalsResponse> = typed<GetTreasuryCreditReversalsResponse>(object({
  data: array(TreasuryCreditReversalSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));