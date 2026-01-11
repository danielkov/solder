import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCustomFieldsDropdownOption
 *
 * 
 */
export interface PaymentLinksResourceCustomFieldsDropdownOption {
  /**
   * The label for the option, displayed to the customer. Up to 100 characters.
   */
  label: string;
  /**
   * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
   */
  value: string;
}

export const PaymentLinksResourceCustomFieldsDropdownOptionSchema: TypedSchema<PaymentLinksResourceCustomFieldsDropdownOption> = typed<PaymentLinksResourceCustomFieldsDropdownOption>(object({
  label: string(),
  value: string(),
}));