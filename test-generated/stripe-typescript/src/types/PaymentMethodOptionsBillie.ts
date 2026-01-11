import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_billie
 *
 * 
 */
export interface PaymentMethodOptionsBillie {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const PaymentMethodOptionsBillieSchema: TypedSchema<PaymentMethodOptionsBillie> = typed<PaymentMethodOptionsBillie>(object({
  captureMethod: optional(string()),
}));