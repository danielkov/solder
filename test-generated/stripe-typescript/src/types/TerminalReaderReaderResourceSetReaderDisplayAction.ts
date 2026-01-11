import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceCart } from './TerminalReaderReaderResourceCart';
import { TerminalReaderReaderResourceCartSchema } from './TerminalReaderReaderResourceCart';
/**
 * TerminalReaderReaderResourceSetReaderDisplayAction
 *
 * Represents a reader action to set the reader display
 */
export interface TerminalReaderReaderResourceSetReaderDisplayAction {
  /**
   * Cart object to be displayed by the reader, including line items, amounts, and currency.
   */
  cart?: TerminalReaderReaderResourceCart;
  /**
   * Type of information to be displayed by the reader. Only `cart` is currently supported.
   */
  type: string;
}

export const TerminalReaderReaderResourceSetReaderDisplayActionSchema: TypedSchema<TerminalReaderReaderResourceSetReaderDisplayAction> = typed<TerminalReaderReaderResourceSetReaderDisplayAction>(object({
  get cart() { return optional(TerminalReaderReaderResourceCartSchema) },
  type: string(),
}));