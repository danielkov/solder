import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem } from './PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem';
import { PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItemSchema } from './PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem';
/**
 * cart
 *
 * Cart details to display on the reader screen, including line items, amounts, and currency.
 */
export interface PostTerminalReadersReaderSetReaderDisplayRequestCart {
  currency: string;
  lineItems: Array<PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem>;
  tax?: number;
  total: number;
}

export const PostTerminalReadersReaderSetReaderDisplayRequestCartSchema: TypedSchema<PostTerminalReadersReaderSetReaderDisplayRequestCart> = typed<PostTerminalReadersReaderSetReaderDisplayRequestCart>(object({
  currency: string(),
  lineItems: array(PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItemSchema),
  tax: optional(number()),
  total: number(),
}));