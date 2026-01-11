import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_alma
 *
 * 
 */
export interface PaymentMethodOptionsAlma {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const PaymentMethodOptionsAlmaSchema: TypedSchema<PaymentMethodOptionsAlma> = typed<PaymentMethodOptionsAlma>(object({
  captureMethod: optional(string()),
}));