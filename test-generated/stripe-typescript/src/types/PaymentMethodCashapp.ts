import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_cashapp
 *
 * 
 */
export interface PaymentMethodCashapp {
  /**
   * A unique and immutable identifier assigned by Cash App to every buyer.
   */
  buyerId?: string;
  /**
   * A public identifier for buyers using Cash App.
   */
  cashtag?: string;
}

export const PaymentMethodCashappSchema: TypedSchema<PaymentMethodCashapp> = typed<PaymentMethodCashapp>(object({
  buyerId: optional(string()),
  cashtag: optional(string()),
}));