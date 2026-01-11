import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderSetReaderDisplayRequestCart } from './PostTerminalReadersReaderSetReaderDisplayRequestCart';
import { PostTerminalReadersReaderSetReaderDisplayRequestCartSchema } from './PostTerminalReadersReaderSetReaderDisplayRequestCart';
export interface PostTerminalReadersReaderSetReaderDisplayRequest {
  /**
   * cart
   *
   * Cart details to display on the reader screen, including line items, amounts, and currency.
   */
  cart?: PostTerminalReadersReaderSetReaderDisplayRequestCart;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Type of information to display. Only `cart` is currently supported.
   */
  type: string;
}

export const PostTerminalReadersReaderSetReaderDisplayRequestSchema: TypedSchema<PostTerminalReadersReaderSetReaderDisplayRequest> = typed<PostTerminalReadersReaderSetReaderDisplayRequest>(object({
  get cart() { return optional(PostTerminalReadersReaderSetReaderDisplayRequestCartSchema) },
  expand: optional(array(string())),
  type: string(),
}));