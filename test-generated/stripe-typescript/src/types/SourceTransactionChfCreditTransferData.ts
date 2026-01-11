import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceTransactionChfCreditTransferData
 *
 * 
 */
export interface SourceTransactionChfCreditTransferData {
  /**
   * Reference associated with the transfer.
   */
  reference?: string;
  /**
   * Sender's country address.
   */
  senderAddressCountry?: string;
  /**
   * Sender's line 1 address.
   */
  senderAddressLine1?: string;
  /**
   * Sender's bank account IBAN.
   */
  senderIban?: string;
  /**
   * Sender's name.
   */
  senderName?: string;
}

export const SourceTransactionChfCreditTransferDataSchema: TypedSchema<SourceTransactionChfCreditTransferData> = typed<SourceTransactionChfCreditTransferData>(object({
  reference: optional(string()),
  senderAddressCountry: optional(string()),
  senderAddressLine1: optional(string()),
  senderIban: optional(string()),
  senderName: optional(string()),
}));