import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_blik
 *
 * 
 */
export interface PaymentMethodDetailsBlik {
  /**
   * A unique and immutable identifier assigned by BLIK to every buyer.
   */
  buyerId?: string;
}

export const PaymentMethodDetailsBlikSchema: TypedSchema<PaymentMethodDetailsBlik> = typed<PaymentMethodDetailsBlik>(object({
  buyerId: optional(string()),
}));