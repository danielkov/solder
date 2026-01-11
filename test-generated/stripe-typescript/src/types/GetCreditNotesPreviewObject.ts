import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * credit_note_shipping_cost
 */
export interface GetCreditNotesPreviewObject {
  shippingRate?: string;
}

export const GetCreditNotesPreviewObjectSchema: TypedSchema<GetCreditNotesPreviewObject> = typed<GetCreditNotesPreviewObject>(object({
  shippingRate: optional(string()),
}));