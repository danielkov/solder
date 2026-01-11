import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationFeeOrRef } from './ApplicationFeeOrRef';
import { ApplicationFeeOrRefSchema } from './ApplicationFeeOrRef';
import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { DestinationUnion } from './DestinationUnion';
import { DestinationUnionSchema } from './DestinationUnion';
import type { FailureBalanceTransactionOrRef } from './FailureBalanceTransactionOrRef';
import { FailureBalanceTransactionOrRefSchema } from './FailureBalanceTransactionOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OriginalPayoutOrRef } from './OriginalPayoutOrRef';
import { OriginalPayoutOrRefSchema } from './OriginalPayoutOrRef';
import type { PayoutsTraceId } from './PayoutsTraceId';
import { PayoutsTraceIdSchema } from './PayoutsTraceId';
import type { ReversedByOrRef } from './ReversedByOrRef';
import { ReversedByOrRefSchema } from './ReversedByOrRef';
/**
 * Payout
 *
 * A `Payout` object is created when you receive funds from Stripe, or when you
initiate a payout to either a bank account or debit card of a [connected
Stripe account](/docs/connect/bank-debit-card-payouts). You can retrieve individual payouts,
and list all payouts. Payouts are made on [varying
schedules](/docs/connect/manage-payout-schedule), depending on your country and
industry.

Related guide: [Receiving payouts](https://stripe.com/docs/payouts)
 */
export interface Payout {
  /**
   * The amount (in cents (or local equivalent)) that transfers to your bank account or debit card.
   */
  amount: number;
  /**
   * The application fee (if any) for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
   */
  applicationFee?: ApplicationFeeOrRef;
  /**
   * The amount of the application fee (if any) requested for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
   */
  applicationFeeAmount?: number;
  /**
   * Date that you can expect the payout to arrive in the bank. This factors in delays to account for weekends or bank holidays.
   */
  arrivalDate: number;
  /**
   * Returns `true` if the payout is created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts).
   */
  automatic: boolean;
  /**
   * ID of the balance transaction that describes the impact of this payout on your account balance.
   */
  balanceTransaction?: BalanceTransactionOrRef;
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
   * ID of the bank account or card the payout is sent to.
   */
  destination?: DestinationUnion;
  /**
   * If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance.
   */
  failureBalanceTransaction?: FailureBalanceTransactionOrRef;
  /**
   * Error code that provides a reason for a payout failure, if available. View our [list of failure codes](https://stripe.com/docs/api#payout_failures).
   */
  failureCode?: string;
  /**
   * Message that provides the reason for a payout failure, if available.
   */
  failureMessage?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The method used to send this payout, which can be `standard` or `instant`. `instant` is supported for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
   */
  method: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * If the payout reverses another, this is the ID of the original payout.
   */
  originalPayout?: OriginalPayoutOrRef;
  /**
   * ID of the v2 FinancialAccount the funds are sent to.
   */
  payoutMethod?: string;
  /**
   * If `completed`, you can use the [Balance Transactions API](https://stripe.com/docs/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.
   */
  reconciliationStatus: string;
  /**
   * If the payout reverses, this is the ID of the payout that reverses this payout.
   */
  reversedBy?: ReversedByOrRef;
  /**
   * The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`.
   */
  sourceType: string;
  /**
   * Extra information about a payout that displays on the user's bank statement.
   */
  statementDescriptor?: string;
  /**
   * Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it's submitted to the bank, when it becomes `in_transit`. The status changes to `paid` if the transaction succeeds, or to `failed` or `canceled` (within 5 business days). Some payouts that fail might initially show as `paid`, then change to `failed`.
   */
  status: string;
  /**
   * A value that generates from the beneficiary's bank that allows users to track payouts with their bank. Banks might call this a "reference number" or something similar.
   */
  traceId?: PayoutsTraceId;
  /**
   * Can be `bank_account` or `card`.
   */
  type: string;
}

export const PayoutSchema: TypedSchema<Payout> = typed<Payout>(object({
  amount: number(),
  get applicationFee() { return optional(ApplicationFeeOrRefSchema) },
  applicationFeeAmount: optional(number()),
  arrivalDate: number(),
  automatic: boolean(),
  get balanceTransaction() { return optional(BalanceTransactionOrRefSchema) },
  created: number(),
  currency: string(),
  description: optional(string()),
  get destination() { return optional(DestinationUnionSchema) },
  get failureBalanceTransaction() { return optional(FailureBalanceTransactionOrRefSchema) },
  failureCode: optional(string()),
  failureMessage: optional(string()),
  id: string(),
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  method: string(),
  object: string(),
  get originalPayout() { return optional(OriginalPayoutOrRefSchema) },
  payoutMethod: optional(string()),
  reconciliationStatus: string(),
  get reversedBy() { return optional(ReversedByOrRefSchema) },
  sourceType: string(),
  statementDescriptor: optional(string()),
  status: string(),
  get traceId() { return optional(PayoutsTraceIdSchema) },
  type: string(),
}));