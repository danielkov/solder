import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryReceivedDebitsResourceLinkedFlows
 *
 * 
 */
export interface TreasuryReceivedDebitsResourceLinkedFlows {
  /**
   * The DebitReversal created as a result of this ReceivedDebit being reversed.
   */
  debitReversal?: string;
  /**
   * Set if the ReceivedDebit is associated with an InboundTransfer's return of funds.
   */
  inboundTransfer?: string;
  /**
   * Set if the ReceivedDebit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
   */
  issuingAuthorization?: string;
  /**
   * Set if the ReceivedDebit is also viewable as an [Issuing Dispute](https://stripe.com/docs/api#issuing_disputes) object.
   */
  issuingTransaction?: string;
  /**
   * Set if the ReceivedDebit was created due to a [Payout](https://stripe.com/docs/api#payouts) object.
   */
  payout?: string;
}

export const TreasuryReceivedDebitsResourceLinkedFlowsSchema: TypedSchema<TreasuryReceivedDebitsResourceLinkedFlows> = typed<TreasuryReceivedDebitsResourceLinkedFlows>(object({
  debitReversal: optional(string()),
  inboundTransfer: optional(string()),
  issuingAuthorization: optional(string()),
  issuingTransaction: optional(string()),
  payout: optional(string()),
}));