import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourcePhone
 *
 * Information about a phone number being collected using a reader
 */
export interface TerminalReaderReaderResourcePhone {
  /**
   * The collected phone number
   */
  value?: string;
}

export const TerminalReaderReaderResourcePhoneSchema: TypedSchema<TerminalReaderReaderResourcePhone> = typed<TerminalReaderReaderResourcePhone>(object({
  value: optional(string()),
}));