import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * transaction_line_item_reversal
 */
export interface PostTaxTransactionsCreateReversalRequestLineItemsItem {
  amount: number;
  amountTax: number;
  metadata?: PostAccountsRequestMetadataObject;
  originalLineItem: string;
  quantity?: number;
  reference: string;
}

export const PostTaxTransactionsCreateReversalRequestLineItemsItemSchema: TypedSchema<PostTaxTransactionsCreateReversalRequestLineItemsItem> = typed<PostTaxTransactionsCreateReversalRequestLineItemsItem>(object({
  amount: number(),
  amountTax: number(),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  originalLineItem: string(),
  quantity: optional(number()),
  reference: string(),
}));