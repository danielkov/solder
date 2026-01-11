import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceTransactionGbpCreditTransferData
 *
 * 
 */
export interface SourceTransactionGbpCreditTransferData {
  /**
   * Bank account fingerprint associated with the Stripe owned bank account receiving the transfer.
   */
  fingerprint?: string;
  /**
   * The credit transfer rails the sender used to push this transfer. The possible rails are: Faster Payments, BACS, CHAPS, and wire transfers. Currently only Faster Payments is supported.
   */
  fundingMethod?: string;
  /**
   * Last 4 digits of sender account number associated with the transfer.
   */
  last4?: string;
  /**
   * Sender entered arbitrary information about the transfer.
   */
  reference?: string;
  /**
   * Sender account number associated with the transfer.
   */
  senderAccountNumber?: string;
  /**
   * Sender name associated with the transfer.
   */
  senderName?: string;
  /**
   * Sender sort code associated with the transfer.
   */
  senderSortCode?: string;
}

export const SourceTransactionGbpCreditTransferDataSchema: TypedSchema<SourceTransactionGbpCreditTransferData> = typed<SourceTransactionGbpCreditTransferData>(object({
  fingerprint: optional(string()),
  fundingMethod: optional(string()),
  last4: optional(string()),
  reference: optional(string()),
  senderAccountNumber: optional(string()),
  senderName: optional(string()),
  senderSortCode: optional(string()),
}));