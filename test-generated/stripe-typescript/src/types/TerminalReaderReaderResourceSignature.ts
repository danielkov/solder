import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceSignature
 *
 * Information about a signature being collected using a reader
 */
export interface TerminalReaderReaderResourceSignature {
  /**
   * The File ID of a collected signature image
   */
  value?: string;
}

export const TerminalReaderReaderResourceSignatureSchema: TypedSchema<TerminalReaderReaderResourceSignature> = typed<TerminalReaderReaderResourceSignature>(object({
  value: optional(string()),
}));