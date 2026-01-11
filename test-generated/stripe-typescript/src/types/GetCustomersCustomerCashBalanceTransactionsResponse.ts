import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { CustomerCashBalanceTransaction } from './CustomerCashBalanceTransaction';
import { CustomerCashBalanceTransactionSchema } from './CustomerCashBalanceTransaction';
/**
 * CustomerCashBalanceTransactionList
 *
 * Customers with certain payments enabled have a cash balance, representing funds that were paid
by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions
represent when funds are moved into or out of this balance. This includes funding by the customer, allocation
to payments, and refunds to the customer.
 */
export interface GetCustomersCustomerCashBalanceTransactionsResponse {
  /**
   * Details about each object.
   */
  data: Array<CustomerCashBalanceTransaction>;
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

export const GetCustomersCustomerCashBalanceTransactionsResponseSchema: TypedSchema<GetCustomersCustomerCashBalanceTransactionsResponse> = typed<GetCustomersCustomerCashBalanceTransactionsResponse>(object({
  data: array(CustomerCashBalanceTransactionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));