import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BankConnectionsResourceAccountNumberDetails
 *
 * 
 */
export interface BankConnectionsResourceAccountNumberDetails {
  /**
   * When the account number is expected to expire, if applicable.
   */
  expectedExpiryDate?: number;
  /**
   * The type of account number associated with the account.
   */
  identifierType: string;
  /**
   * Whether the account number is currently active and usable for transactions.
   */
  status: string;
  /**
   * The payment networks that the account number can be used for.
   */
  supportedNetworks: Array<string>;
}

export const BankConnectionsResourceAccountNumberDetailsSchema: TypedSchema<BankConnectionsResourceAccountNumberDetails> = typed<BankConnectionsResourceAccountNumberDetails>(object({
  expectedExpiryDate: optional(number()),
  identifierType: string(),
  status: string(),
  supportedNetworks: array(string()),
}));