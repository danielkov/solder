import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceEmail
 *
 * Information about a email being collected using a reader
 */
export interface TerminalReaderReaderResourceEmail {
  /**
   * The collected email address
   */
  value?: string;
}

export const TerminalReaderReaderResourceEmailSchema: TypedSchema<TerminalReaderReaderResourceEmail> = typed<TerminalReaderReaderResourceEmail>(object({
  value: optional(string()),
}));