import { number, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * amount_details_line_item_tax_param
 */
export interface PostPaymentIntentsRequestLineItemsObjectTax {
  totalTaxAmount: number;
}

export const PostPaymentIntentsRequestLineItemsObjectTaxSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObjectTax> = typed<PostPaymentIntentsRequestLineItemsObjectTax>(object({ totalTaxAmount: number() }));
