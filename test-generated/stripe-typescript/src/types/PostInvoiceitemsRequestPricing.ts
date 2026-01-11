import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * pricing_param
 *
 * The pricing information for the invoice item.
 */
export interface PostInvoiceitemsRequestPricing {
  price?: string;
}

export const PostInvoiceitemsRequestPricingSchema: TypedSchema<PostInvoiceitemsRequestPricing> = typed<PostInvoiceitemsRequestPricing>(object({
  price: optional(string()),
}));