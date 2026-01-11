import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft } from './CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft';
import { CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraftSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft';
import type { CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction } from './CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction';
import type { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction';
import type { CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction } from './CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction';
import type { CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance } from './CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance';
import { CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalanceSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance';
import type { CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction } from './CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction';
import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
/**
 * CustomerCashBalanceTransaction
 *
 * Customers with certain payments enabled have a cash balance, representing funds that were paid
by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions
represent when funds are moved into or out of this balance. This includes funding by the customer, allocation
to payments, and refunds to the customer.
 */
export interface CustomerCashBalanceTransaction {
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft
   *
   * 
   */
  adjustedForOverdraft?: CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction
   *
   * 
   */
  appliedToPayment?: CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The customer whose available cash balance changed as a result of this transaction.
   */
  customer: CustomerOrRef;
  /**
   * The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  endingBalance: number;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction
   *
   * 
   */
  funded?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The amount by which the cash balance changed, represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). A positive value represents funds being added to the cash balance, a negative value represents funds being removed from the cash balance.
   */
  netAmount: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction
   *
   * 
   */
  refundedFromPayment?: CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance
   *
   * 
   */
  transferredToBalance?: CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance;
  /**
   * The type of the cash balance transaction. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
   */
  type: string;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction
   *
   * 
   */
  unappliedFromPayment?: CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction;
}

export const CustomerCashBalanceTransactionSchema: TypedSchema<CustomerCashBalanceTransaction> = typed<CustomerCashBalanceTransaction>(object({
  get adjustedForOverdraft() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraftSchema) },
  get appliedToPayment() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionSchema) },
  created: number(),
  currency: string(),
  customer: CustomerOrRefSchema,
  endingBalance: number(),
  get funded() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionSchema) },
  id: string(),
  livemode: boolean(),
  netAmount: number(),
  object: string(),
  get refundedFromPayment() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionSchema) },
  get transferredToBalance() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalanceSchema) },
  type: string(),
  get unappliedFromPayment() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionSchema) },
}));