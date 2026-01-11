import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_afterpay_clearpay
 *
 * 
 */
export interface PaymentMethodDetailsAfterpayClearpay {
  /**
   * The Afterpay order ID associated with this payment intent.
   */
  orderId?: string;
  /**
   * Order identifier shown to the merchant in Afterpay’s online portal.
   */
  reference?: string;
}

export const PaymentMethodDetailsAfterpayClearpaySchema: TypedSchema<PaymentMethodDetailsAfterpayClearpay> = typed<PaymentMethodDetailsAfterpayClearpay>(object({
  orderId: optional(string()),
  reference: optional(string()),
}));