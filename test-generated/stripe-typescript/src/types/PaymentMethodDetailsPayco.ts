import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_payco
 *
 * 
 */
export interface PaymentMethodDetailsPayco {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string;
  /**
   * The Payco transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsPaycoSchema: TypedSchema<PaymentMethodDetailsPayco> = typed<PaymentMethodDetailsPayco>(object({
  buyerId: optional(string()),
  transactionId: optional(string()),
}));