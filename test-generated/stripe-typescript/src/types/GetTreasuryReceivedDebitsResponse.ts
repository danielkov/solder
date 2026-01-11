import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryReceivedDebit } from './TreasuryReceivedDebit';
import { TreasuryReceivedDebitSchema } from './TreasuryReceivedDebit';
/**
 * TreasuryReceivedDebitsResourceReceivedDebitList
 *
 * 
 */
export interface GetTreasuryReceivedDebitsResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryReceivedDebit>;
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

export const GetTreasuryReceivedDebitsResponseSchema: TypedSchema<GetTreasuryReceivedDebitsResponse> = typed<GetTreasuryReceivedDebitsResponse>(object({
  data: array(TreasuryReceivedDebitSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));