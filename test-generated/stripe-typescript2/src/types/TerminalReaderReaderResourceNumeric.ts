import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceNumeric
 * 
 * Information about a number being collected using a reader
 */
export interface TerminalReaderReaderResourceNumeric {
  /**
   * The collected number
   */
  value?: string;
}

export const TerminalReaderReaderResourceNumericSchema: TypedSchema<TerminalReaderReaderResourceNumeric> = typed<TerminalReaderReaderResourceNumeric>(object({ value: optional(string()) }));
