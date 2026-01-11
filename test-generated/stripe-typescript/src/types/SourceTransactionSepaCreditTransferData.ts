import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceTransactionSepaCreditTransferData
 *
 * 
 */
export interface SourceTransactionSepaCreditTransferData {
  /**
   * Reference associated with the transfer.
   */
  reference?: string;
  /**
   * Sender's bank account IBAN.
   */
  senderIban?: string;
  /**
   * Sender's name.
   */
  senderName?: string;
}

export const SourceTransactionSepaCreditTransferDataSchema: TypedSchema<SourceTransactionSepaCreditTransferData> = typed<SourceTransactionSepaCreditTransferData>(object({
  reference: optional(string()),
  senderIban: optional(string()),
  senderName: optional(string()),
}));