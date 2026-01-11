import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceLineItem
 *
 * Represents a line item to be displayed on the reader
 */
export interface TerminalReaderReaderResourceLineItem {
  /**
   * The amount of the line item. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Description of the line item.
   */
  description: string;
  /**
   * The quantity of the line item.
   */
  quantity: number;
}

export const TerminalReaderReaderResourceLineItemSchema: TypedSchema<TerminalReaderReaderResourceLineItem> = typed<TerminalReaderReaderResourceLineItem>(object({
  amount: number(),
  description: string(),
  quantity: number(),
}));