import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * calculation_line_item
 */
export interface PostTaxCalculationsRequestLineItemsItem {
  amount: number;
  metadata?: PostAccountsRequestMetadataObject;
  product?: string;
  quantity?: number;
  reference?: string;
  taxBehavior?: string;
  taxCode?: string;
}

export const PostTaxCalculationsRequestLineItemsItemSchema: TypedSchema<PostTaxCalculationsRequestLineItemsItem> = typed<PostTaxCalculationsRequestLineItemsItem>(object({
  amount: number(),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  product: optional(string()),
  quantity: optional(number()),
  reference: optional(string()),
  taxBehavior: optional(string()),
  taxCode: optional(string()),
}));