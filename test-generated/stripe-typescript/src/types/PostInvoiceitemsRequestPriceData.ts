import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * one_time_price_data
 *
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
 */
export interface PostInvoiceitemsRequestPriceData {
  currency: string;
  product: string;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostInvoiceitemsRequestPriceDataSchema: TypedSchema<PostInvoiceitemsRequestPriceData> = typed<PostInvoiceitemsRequestPriceData>(object({
  currency: string(),
  product: string(),
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));