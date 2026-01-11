import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_satispay
 *
 * 
 */
export interface PaymentMethodOptionsSatispay {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const PaymentMethodOptionsSatispaySchema: TypedSchema<PaymentMethodOptionsSatispay> = typed<PaymentMethodOptionsSatispay>(object({
  captureMethod: optional(string()),
}));