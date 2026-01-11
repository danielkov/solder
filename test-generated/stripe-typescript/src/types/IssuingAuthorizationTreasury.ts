import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationTreasury
 *
 * 
 */
export interface IssuingAuthorizationTreasury {
  /**
   * The array of [ReceivedCredits](https://stripe.com/docs/api/treasury/received_credits) associated with this authorization
   */
  receivedCredits: Array<string>;
  /**
   * The array of [ReceivedDebits](https://stripe.com/docs/api/treasury/received_debits) associated with this authorization
   */
  receivedDebits: Array<string>;
  /**
   * The Treasury [Transaction](https://stripe.com/docs/api/treasury/transactions) associated with this authorization
   */
  transaction?: string;
}

export const IssuingAuthorizationTreasurySchema: TypedSchema<IssuingAuthorizationTreasury> = typed<IssuingAuthorizationTreasury>(object({
  receivedCredits: array(string()),
  receivedDebits: array(string()),
  transaction: optional(string()),
}));