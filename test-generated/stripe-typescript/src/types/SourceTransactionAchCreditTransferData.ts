import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceTransactionAchCreditTransferData
 *
 * 
 */
export interface SourceTransactionAchCreditTransferData {
  /**
   * Customer data associated with the transfer.
   */
  customerData?: string;
  /**
   * Bank account fingerprint associated with the transfer.
   */
  fingerprint?: string;
  /**
   * Last 4 digits of the account number associated with the transfer.
   */
  last4?: string;
  /**
   * Routing number associated with the transfer.
   */
  routingNumber?: string;
}

export const SourceTransactionAchCreditTransferDataSchema: TypedSchema<SourceTransactionAchCreditTransferData> = typed<SourceTransactionAchCreditTransferData>(object({
  customerData: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  routingNumber: optional(string()),
}));