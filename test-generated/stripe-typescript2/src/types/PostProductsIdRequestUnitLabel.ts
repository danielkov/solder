import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal. May only be set if `type=service`.
 */
export type PostProductsIdRequestUnitLabel = string | string;

export const PostProductsIdRequestUnitLabelSchema: TypedSchema<PostProductsIdRequestUnitLabel> = typed<PostProductsIdRequestUnitLabel>(union(string(), string()));
