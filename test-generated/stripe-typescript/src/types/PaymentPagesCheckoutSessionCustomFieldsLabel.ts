import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionCustomFieldsLabel
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomFieldsLabel {
  /**
   * Custom text for the label, displayed to the customer. Up to 50 characters.
   */
  custom?: string;
  /**
   * The type of the label.
   */
  type: string;
}

export const PaymentPagesCheckoutSessionCustomFieldsLabelSchema: TypedSchema<PaymentPagesCheckoutSessionCustomFieldsLabel> = typed<PaymentPagesCheckoutSessionCustomFieldsLabel>(object({
  custom: optional(string()),
  type: string(),
}));