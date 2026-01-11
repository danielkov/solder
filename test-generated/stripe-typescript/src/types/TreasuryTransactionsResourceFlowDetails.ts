import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorization } from './IssuingAuthorization';
import { IssuingAuthorizationSchema } from './IssuingAuthorization';
import type { TreasuryCreditReversal } from './TreasuryCreditReversal';
import { TreasuryCreditReversalSchema } from './TreasuryCreditReversal';
import type { TreasuryDebitReversal } from './TreasuryDebitReversal';
import { TreasuryDebitReversalSchema } from './TreasuryDebitReversal';
import type { TreasuryInboundTransfer } from './TreasuryInboundTransfer';
import { TreasuryInboundTransferSchema } from './TreasuryInboundTransfer';
import type { TreasuryOutboundPayment } from './TreasuryOutboundPayment';
import { TreasuryOutboundPaymentSchema } from './TreasuryOutboundPayment';
import type { TreasuryOutboundTransfer } from './TreasuryOutboundTransfer';
import { TreasuryOutboundTransferSchema } from './TreasuryOutboundTransfer';
import type { TreasuryReceivedCredit } from './TreasuryReceivedCredit';
import { TreasuryReceivedCreditSchema } from './TreasuryReceivedCredit';
import type { TreasuryReceivedDebit } from './TreasuryReceivedDebit';
import { TreasuryReceivedDebitSchema } from './TreasuryReceivedDebit';
/**
 * TreasuryTransactionsResourceFlowDetails
 *
 * 
 */
export interface TreasuryTransactionsResourceFlowDetails {
  /**
   * TreasuryReceivedCreditsResourceCreditReversal
   *
   * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
   */
  creditReversal?: TreasuryCreditReversal;
  /**
   * TreasuryReceivedDebitsResourceDebitReversal
   *
   * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
   */
  debitReversal?: TreasuryDebitReversal;
  /**
   * TreasuryInboundTransfersResourceInboundTransfer
   *
   * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.

Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
   */
  inboundTransfer?: TreasuryInboundTransfer;
  /**
   * IssuingAuthorization
   *
   * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
purchase to be completed successfully.

Related guide: [Issued card authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
   */
  issuingAuthorization?: IssuingAuthorization;
  /**
   * TreasuryOutboundPaymentsResourceOutboundPayment
   *
   * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).

Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.

Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
   */
  outboundPayment?: TreasuryOutboundPayment;
  /**
   * TreasuryOutboundTransfersResourceOutboundTransfer
   *
   * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.

Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.

Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
   */
  outboundTransfer?: TreasuryOutboundTransfer;
  /**
   * TreasuryReceivedCreditsResourceReceivedCredit
   *
   * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
   */
  receivedCredit?: TreasuryReceivedCredit;
  /**
   * TreasuryReceivedDebitsResourceReceivedDebit
   *
   * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
   */
  receivedDebit?: TreasuryReceivedDebit;
  /**
   * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
   */
  type: string;
}

export const TreasuryTransactionsResourceFlowDetailsSchema: TypedSchema<TreasuryTransactionsResourceFlowDetails> = typed<TreasuryTransactionsResourceFlowDetails>(object({
  get creditReversal() { return optional(TreasuryCreditReversalSchema) },
  get debitReversal() { return optional(TreasuryDebitReversalSchema) },
  get inboundTransfer() { return optional(TreasuryInboundTransferSchema) },
  get issuingAuthorization() { return optional(IssuingAuthorizationSchema) },
  get outboundPayment() { return optional(TreasuryOutboundPaymentSchema) },
  get outboundTransfer() { return optional(TreasuryOutboundTransferSchema) },
  get receivedCredit() { return optional(TreasuryReceivedCreditSchema) },
  get receivedDebit() { return optional(TreasuryReceivedDebitSchema) },
  type: string(),
}));