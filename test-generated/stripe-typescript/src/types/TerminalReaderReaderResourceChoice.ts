import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceChoice
 *
 * Choice to be selected on a Reader
 */
export interface TerminalReaderReaderResourceChoice {
  /**
   * The identifier for the selected choice. Maximum 50 characters.
   */
  id?: string;
  /**
   * The button style for the choice. Can be `primary` or `secondary`.
   */
  style?: string;
  /**
   * The text to be selected. Maximum 30 characters.
   */
  text: string;
}

export const TerminalReaderReaderResourceChoiceSchema: TypedSchema<TerminalReaderReaderResourceChoice> = typed<TerminalReaderReaderResourceChoice>(object({
  id: optional(string()),
  style: optional(string()),
  text: string(),
}));