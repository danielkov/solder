import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * pricing_param
 */
export interface PostInvoicesInvoiceAddLinesRequestLinesItemPricing {
  price?: string;
}

export const PostInvoicesInvoiceAddLinesRequestLinesItemPricingSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequestLinesItemPricing> = typed<PostInvoicesInvoiceAddLinesRequestLinesItemPricing>(object({ price: optional(string()) }));
