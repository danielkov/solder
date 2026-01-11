import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionCustomFieldsNumeric
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomFieldsNumeric {
  /**
   * The value that will pre-fill the field on the payment page.
   */
  defaultValue?: string;
  /**
   * The maximum character length constraint for the customer's input.
   */
  maximumLength?: number;
  /**
   * The minimum character length requirement for the customer's input.
   */
  minimumLength?: number;
  /**
   * The value entered by the customer, containing only digits.
   */
  value?: string;
}

export const PaymentPagesCheckoutSessionCustomFieldsNumericSchema: TypedSchema<PaymentPagesCheckoutSessionCustomFieldsNumeric> = typed<PaymentPagesCheckoutSessionCustomFieldsNumeric>(object({
  defaultValue: optional(string()),
  maximumLength: optional(number()),
  minimumLength: optional(number()),
  value: optional(string()),
}));