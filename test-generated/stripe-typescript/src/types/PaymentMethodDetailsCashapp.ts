import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_cashapp
 *
 * 
 */
export interface PaymentMethodDetailsCashapp {
  /**
   * A unique and immutable identifier assigned by Cash App to every buyer.
   */
  buyerId?: string;
  /**
   * A public identifier for buyers using Cash App.
   */
  cashtag?: string;
  /**
   * A unique and immutable identifier of payments assigned by Cash App
   */
  transactionId?: string;
}

export const PaymentMethodDetailsCashappSchema: TypedSchema<PaymentMethodDetailsCashapp> = typed<PaymentMethodDetailsCashapp>(object({
  buyerId: optional(string()),
  cashtag: optional(string()),
  transactionId: optional(string()),
}));