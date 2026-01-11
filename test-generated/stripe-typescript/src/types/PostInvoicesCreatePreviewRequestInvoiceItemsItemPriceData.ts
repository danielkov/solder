import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * one_time_price_data
 */
export interface PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData {
  currency: string;
  product: string;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceDataSchema: TypedSchema<PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData> = typed<PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData>(object({
  currency: string(),
  product: string(),
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));