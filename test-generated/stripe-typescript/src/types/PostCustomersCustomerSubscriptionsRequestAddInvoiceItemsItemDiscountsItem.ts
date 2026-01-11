import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * discounts_data_param
 */
export interface PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem {
  coupon?: string;
  discount?: string;
  promotionCode?: string;
}

export const PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> = typed<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>(object({
  coupon: optional(string()),
  discount: optional(string()),
  promotionCode: optional(string()),
}));