import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { CustomerBalanceTransaction } from './CustomerBalanceTransaction';
import { CustomerBalanceTransactionSchema } from './CustomerBalanceTransaction';
/**
 * CustomerBalanceTransactionList
 *
 * 
 */
export interface GetCustomersCustomerBalanceTransactionsResponse {
  /**
   * Details about each object.
   */
  data: Array<CustomerBalanceTransaction>;
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

export const GetCustomersCustomerBalanceTransactionsResponseSchema: TypedSchema<GetCustomersCustomerBalanceTransactionsResponse> = typed<GetCustomersCustomerBalanceTransactionsResponse>(object({
  data: array(CustomerBalanceTransactionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));