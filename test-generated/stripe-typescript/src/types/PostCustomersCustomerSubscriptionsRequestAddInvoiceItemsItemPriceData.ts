import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * one_time_price_data_with_negative_amounts
 */
export interface PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData {
  currency: string;
  product: string;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceDataSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData> = typed<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData>(object({
  currency: string(),
  product: string(),
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));