import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { IssuingTransaction } from './IssuingTransaction';
import { IssuingTransactionSchema } from './IssuingTransaction';
/**
 * IssuingTransactionList
 *
 * 
 */
export interface GetIssuingTransactionsResponse {
  data: Array<IssuingTransaction>;
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

export const GetIssuingTransactionsResponseSchema: TypedSchema<GetIssuingTransactionsResponse> = typed<GetIssuingTransactionsResponse>(object({
  data: array(IssuingTransactionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));