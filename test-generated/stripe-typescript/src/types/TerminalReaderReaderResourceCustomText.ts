import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceCustomText
 *
 * Represents custom text to be displayed when collecting the input using a reader
 */
export interface TerminalReaderReaderResourceCustomText {
  /**
   * Customize the default description for this input
   */
  description?: string;
  /**
   * Customize the default label for this input's skip button
   */
  skipButton?: string;
  /**
   * Customize the default label for this input's submit button
   */
  submitButton?: string;
  /**
   * Customize the default title for this input
   */
  title?: string;
}

export const TerminalReaderReaderResourceCustomTextSchema: TypedSchema<TerminalReaderReaderResourceCustomText> = typed<TerminalReaderReaderResourceCustomText>(object({
  description: optional(string()),
  skipButton: optional(string()),
  submitButton: optional(string()),
  title: optional(string()),
}));