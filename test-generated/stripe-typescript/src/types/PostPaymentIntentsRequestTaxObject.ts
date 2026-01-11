import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * amount_details_tax_param
 */
export interface PostPaymentIntentsRequestTaxObject {
  totalTaxAmount: number;
}

export const PostPaymentIntentsRequestTaxObjectSchema: TypedSchema<PostPaymentIntentsRequestTaxObject> = typed<PostPaymentIntentsRequestTaxObject>(object({
  totalTaxAmount: number(),
}));