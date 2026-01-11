import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FinancialConnectionsTransaction } from './FinancialConnectionsTransaction';
import { FinancialConnectionsTransactionSchema } from './FinancialConnectionsTransaction';
/**
 * BankConnectionsResourceTransactionList
 *
 * 
 */
export interface GetFinancialConnectionsTransactionsResponse {
  /**
   * Details about each object.
   */
  data: Array<FinancialConnectionsTransaction>;
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

export const GetFinancialConnectionsTransactionsResponseSchema: TypedSchema<GetFinancialConnectionsTransactionsResponse> = typed<GetFinancialConnectionsTransactionsResponse>(object({
  data: array(FinancialConnectionsTransactionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));