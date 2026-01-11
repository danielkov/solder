import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceChoice } from './TerminalReaderReaderResourceChoice';
import { TerminalReaderReaderResourceChoiceSchema } from './TerminalReaderReaderResourceChoice';
/**
 * TerminalReaderReaderResourceSelection
 *
 * Information about a selection being collected using a reader
 */
export interface TerminalReaderReaderResourceSelection {
  /**
   * List of possible choices to be selected
   */
  choices: Array<TerminalReaderReaderResourceChoice>;
  /**
   * The id of the selected choice
   */
  id?: string;
  /**
   * The text of the selected choice
   */
  text?: string;
}

export const TerminalReaderReaderResourceSelectionSchema: TypedSchema<TerminalReaderReaderResourceSelection> = typed<TerminalReaderReaderResourceSelection>(object({
  choices: array(TerminalReaderReaderResourceChoiceSchema),
  id: optional(string()),
  text: optional(string()),
}));