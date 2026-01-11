import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Fee } from './Fee';
import { FeeSchema } from './Fee';
import type { SourceUnion2 } from './SourceUnion2';
import { SourceUnion2Schema } from './SourceUnion2';
/**
 * BalanceTransaction
 *
 * Balance transactions represent funds moving through your Stripe account.
Stripe creates them for every type of transaction that enters or leaves your Stripe account balance.

Related guide: [Balance transaction types](https://stripe.com/docs/reports/balance-transaction-types)
 */
export interface BalanceTransaction {
  /**
   * Gross amount of this transaction (in cents (or local equivalent)). A positive value represents funds charged to another party, and a negative value represents funds sent to another party.
   */
  amount: number;
  /**
   * The date that the transaction's net funds become available in the Stripe balance.
   */
  availableOn: number;
  /**
   * The balance that this transaction impacts.
   */
  balanceType?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * If applicable, this transaction uses an exchange rate. If money converts from currency A to currency B, then the `amount` in currency A, multipled by the `exchange_rate`, equals the `amount` in currency B. For example, if you charge a customer 10.00 EUR, the PaymentIntent's `amount` is `1000` and `currency` is `eur`. If this converts to 12.34 USD in your Stripe account, the BalanceTransaction's `amount` is `1234`, its `currency` is `usd`, and the `exchange_rate` is `1.234`.
   */
  exchangeRate?: number;
  /**
   * Fees (in cents (or local equivalent)) paid for this transaction. Represented as a positive integer when assessed.
   */
  fee: number;
  /**
   * Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction.
   */
  feeDetails: Array<Fee>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Net impact to a Stripe balance (in cents (or local equivalent)). A positive value represents incrementing a Stripe balance, and a negative value decrementing a Stripe balance. You can calculate the net impact of a transaction on a balance by `amount` - `fee`
   */
  net: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective.
   */
  reportingCategory: string;
  /**
   * This transaction relates to the Stripe object.
   */
  source?: SourceUnion2;
  /**
   * The transaction's net funds status in the Stripe balance, which are either `available` or `pending`.
   */
  status: string;
  /**
   * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. Learn more about [balance transaction types and what they represent](https://stripe.com/docs/reports/balance-transaction-types). To classify transactions for accounting purposes, consider `reporting_category` instead.
   */
  type: string;
}

export const BalanceTransactionSchema: TypedSchema<BalanceTransaction> = typed<BalanceTransaction>(object({
  amount: number(),
  availableOn: number(),
  balanceType: optional(string()),
  created: number(),
  currency: string(),
  description: optional(string()),
  exchangeRate: optional(number()),
  fee: number(),
  feeDetails: array(FeeSchema),
  id: string(),
  net: number(),
  object: string(),
  reportingCategory: string(),
  get source() { return optional(SourceUnion2Schema) },
  status: string(),
  type: string(),
}));