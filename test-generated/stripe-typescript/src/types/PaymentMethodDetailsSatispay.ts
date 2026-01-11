import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_satispay
 *
 * 
 */
export interface PaymentMethodDetailsSatispay {
  /**
   * The Satispay transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsSatispaySchema: TypedSchema<PaymentMethodDetailsSatispay> = typed<PaymentMethodDetailsSatispay>(object({
  transactionId: optional(string()),
}));