import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionTreasury
 *
 * 
 */
export interface IssuingTransactionTreasury {
  /**
   * The Treasury [ReceivedCredit](https://stripe.com/docs/api/treasury/received_credits) representing this Issuing transaction if it is a refund
   */
  receivedCredit?: string;
  /**
   * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) representing this Issuing transaction if it is a capture
   */
  receivedDebit?: string;
}

export const IssuingTransactionTreasurySchema: TypedSchema<IssuingTransactionTreasury> = typed<IssuingTransactionTreasury>(object({
  receivedCredit: optional(string()),
  receivedDebit: optional(string()),
}));