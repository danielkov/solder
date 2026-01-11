import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceText
 *
 * Information about text being collected using a reader
 */
export interface TerminalReaderReaderResourceText {
  /**
   * The collected text value
   */
  value?: string;
}

export const TerminalReaderReaderResourceTextSchema: TypedSchema<TerminalReaderReaderResourceText> = typed<TerminalReaderReaderResourceText>(object({
  value: optional(string()),
}));