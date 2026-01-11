import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceToggle
 *
 * Information about an input's toggle
 */
export interface TerminalReaderReaderResourceToggle {
  /**
   * The toggle's default value. Can be `enabled` or `disabled`.
   */
  defaultValue?: string;
  /**
   * The toggle's description text. Maximum 50 characters.
   */
  description?: string;
  /**
   * The toggle's title text. Maximum 50 characters.
   */
  title?: string;
  /**
   * The toggle's collected value. Can be `enabled` or `disabled`.
   */
  value?: string;
}

export const TerminalReaderReaderResourceToggleSchema: TypedSchema<TerminalReaderReaderResourceToggle> = typed<TerminalReaderReaderResourceToggle>(object({
  defaultValue: optional(string()),
  description: optional(string()),
  title: optional(string()),
  value: optional(string()),
}));