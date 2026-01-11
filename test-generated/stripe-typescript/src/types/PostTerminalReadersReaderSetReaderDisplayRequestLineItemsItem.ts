import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * line_item
 */
export interface PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem {
  amount: number;
  description: string;
  quantity: number;
}

export const PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItemSchema: TypedSchema<PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem> = typed<PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem>(object({
  amount: number(),
  description: string(),
  quantity: number(),
}));