import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceLineItem } from './TerminalReaderReaderResourceLineItem';
import { TerminalReaderReaderResourceLineItemSchema } from './TerminalReaderReaderResourceLineItem';
/**
 * TerminalReaderReaderResourceCart
 *
 * Represents a cart to be displayed on the reader
 */
export interface TerminalReaderReaderResourceCart {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * List of line items in the cart.
   */
  lineItems: Array<TerminalReaderReaderResourceLineItem>;
  /**
   * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  tax?: number;
  /**
   * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  total: number;
}

export const TerminalReaderReaderResourceCartSchema: TypedSchema<TerminalReaderReaderResourceCart> = typed<TerminalReaderReaderResourceCart>(object({
  currency: string(),
  lineItems: array(TerminalReaderReaderResourceLineItemSchema),
  tax: optional(number()),
  total: number(),
}));