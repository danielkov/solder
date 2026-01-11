import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCustomFieldsNumeric
 *
 * 
 */
export interface PaymentLinksResourceCustomFieldsNumeric {
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
}

export const PaymentLinksResourceCustomFieldsNumericSchema: TypedSchema<PaymentLinksResourceCustomFieldsNumeric> = typed<PaymentLinksResourceCustomFieldsNumeric>(object({
  defaultValue: optional(string()),
  maximumLength: optional(number()),
  minimumLength: optional(number()),
}));