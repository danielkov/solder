import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingDisputeTreasury
 *
 * 
 */
export interface IssuingDisputeTreasury {
  /**
   * The Treasury [DebitReversal](https://stripe.com/docs/api/treasury/debit_reversals) representing this Issuing dispute
   */
  debitReversal?: string;
  /**
   * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) that is being disputed.
   */
  receivedDebit: string;
}

export const IssuingDisputeTreasurySchema: TypedSchema<IssuingDisputeTreasury> = typed<IssuingDisputeTreasury>(object({
  debitReversal: optional(string()),
  receivedDebit: string(),
}));