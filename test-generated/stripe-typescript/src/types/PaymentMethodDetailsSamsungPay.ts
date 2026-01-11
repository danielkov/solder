import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_samsung_pay
 *
 * 
 */
export interface PaymentMethodDetailsSamsungPay {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string;
  /**
   * The Samsung Pay transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsSamsungPaySchema: TypedSchema<PaymentMethodDetailsSamsungPay> = typed<PaymentMethodDetailsSamsungPay>(object({
  buyerId: optional(string()),
  transactionId: optional(string()),
}));