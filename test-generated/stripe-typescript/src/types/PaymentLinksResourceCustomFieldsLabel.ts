import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCustomFieldsLabel
 *
 * 
 */
export interface PaymentLinksResourceCustomFieldsLabel {
  /**
   * Custom text for the label, displayed to the customer. Up to 50 characters.
   */
  custom?: string;
  /**
   * The type of the label.
   */
  type: string;
}

export const PaymentLinksResourceCustomFieldsLabelSchema: TypedSchema<PaymentLinksResourceCustomFieldsLabel> = typed<PaymentLinksResourceCustomFieldsLabel>(object({
  custom: optional(string()),
  type: string(),
}));