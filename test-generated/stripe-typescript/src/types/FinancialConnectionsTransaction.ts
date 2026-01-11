import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { BankConnectionsResourceTransactionResourceStatusTransitions } from './BankConnectionsResourceTransactionResourceStatusTransitions';
import { BankConnectionsResourceTransactionResourceStatusTransitionsSchema } from './BankConnectionsResourceTransactionResourceStatusTransitions';
/**
 * BankConnectionsResourceTransaction
 *
 * A Transaction represents a real transaction that affects a Financial Connections Account balance.
 */
export interface FinancialConnectionsTransaction {
  /**
   * The ID of the Financial Connections Account this transaction belongs to.
   */
  account: string;
  /**
   * The amount of this transaction, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The description of this transaction.
   */
  description: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The status of the transaction.
   */
  status: string;
  /**
   * BankConnectionsResourceTransactionResourceStatusTransitions
   *
   * 
   */
  statusTransitions: BankConnectionsResourceTransactionResourceStatusTransitions;
  /**
   * Time at which the transaction was transacted. Measured in seconds since the Unix epoch.
   */
  transactedAt: number;
  /**
   * The token of the transaction refresh that last updated or created this transaction.
   */
  transactionRefresh: string;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
}

export const FinancialConnectionsTransactionSchema: TypedSchema<FinancialConnectionsTransaction> = typed<FinancialConnectionsTransaction>(object({
  account: string(),
  amount: number(),
  currency: string(),
  description: string(),
  id: string(),
  livemode: boolean(),
  object: string(),
  status: string(),
  statusTransitions: BankConnectionsResourceTransactionResourceStatusTransitionsSchema,
  transactedAt: number(),
  transactionRefresh: string(),
  updated: number(),
}));