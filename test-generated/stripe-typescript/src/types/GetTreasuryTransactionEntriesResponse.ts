import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryTransactionEntry } from './TreasuryTransactionEntry';
import { TreasuryTransactionEntrySchema } from './TreasuryTransactionEntry';
/**
 * TreasuryTransactionsResourceTransactionEntryList
 *
 * 
 */
export interface GetTreasuryTransactionEntriesResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryTransactionEntry>;
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

export const GetTreasuryTransactionEntriesResponseSchema: TypedSchema<GetTreasuryTransactionEntriesResponse> = typed<GetTreasuryTransactionEntriesResponse>(object({
  data: array(TreasuryTransactionEntrySchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));