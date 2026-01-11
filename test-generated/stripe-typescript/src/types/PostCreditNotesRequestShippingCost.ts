import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * credit_note_shipping_cost
 *
 * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
 */
export interface PostCreditNotesRequestShippingCost {
  shippingRate?: string;
}

export const PostCreditNotesRequestShippingCostSchema: TypedSchema<PostCreditNotesRequestShippingCost> = typed<PostCreditNotesRequestShippingCost>(object({
  shippingRate: optional(string()),
}));