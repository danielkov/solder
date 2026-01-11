import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionCustomFieldsOption
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomFieldsOption {
  /**
   * The label for the option, displayed to the customer. Up to 100 characters.
   */
  label: string;
  /**
   * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
   */
  value: string;
}

export const PaymentPagesCheckoutSessionCustomFieldsOptionSchema: TypedSchema<PaymentPagesCheckoutSessionCustomFieldsOption> = typed<PaymentPagesCheckoutSessionCustomFieldsOption>(object({
  label: string(),
  value: string(),
}));