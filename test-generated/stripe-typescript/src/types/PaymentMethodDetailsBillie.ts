import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_billie
 *
 * 
 */
export interface PaymentMethodDetailsBillie {
  /**
   * The Billie transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsBillieSchema: TypedSchema<PaymentMethodDetailsBillie> = typed<PaymentMethodDetailsBillie>(object({
  transactionId: optional(string()),
}));