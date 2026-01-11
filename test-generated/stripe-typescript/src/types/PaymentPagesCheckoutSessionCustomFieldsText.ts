import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionCustomFieldsText
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomFieldsText {
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
   * The value entered by the customer.
   */
  value?: string;
}

export const PaymentPagesCheckoutSessionCustomFieldsTextSchema: TypedSchema<PaymentPagesCheckoutSessionCustomFieldsText> = typed<PaymentPagesCheckoutSessionCustomFieldsText>(object({
  defaultValue: optional(string()),
  maximumLength: optional(number()),
  minimumLength: optional(number()),
  value: optional(string()),
}));