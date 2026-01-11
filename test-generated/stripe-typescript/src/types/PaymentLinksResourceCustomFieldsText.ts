import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCustomFieldsText
 *
 * 
 */
export interface PaymentLinksResourceCustomFieldsText {
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

export const PaymentLinksResourceCustomFieldsTextSchema: TypedSchema<PaymentLinksResourceCustomFieldsText> = typed<PaymentLinksResourceCustomFieldsText>(object({
  defaultValue: optional(string()),
  maximumLength: optional(number()),
  minimumLength: optional(number()),
}));