import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceCustomFieldsDropdownOption } from './PaymentLinksResourceCustomFieldsDropdownOption';
import { PaymentLinksResourceCustomFieldsDropdownOptionSchema } from './PaymentLinksResourceCustomFieldsDropdownOption';
/**
 * PaymentLinksResourceCustomFieldsDropdown
 *
 * 
 */
export interface PaymentLinksResourceCustomFieldsDropdown {
  /**
   * The value that will pre-fill on the payment page.
   */
  defaultValue?: string;
  /**
   * The options available for the customer to select. Up to 200 options allowed.
   */
  options: Array<PaymentLinksResourceCustomFieldsDropdownOption>;
}

export const PaymentLinksResourceCustomFieldsDropdownSchema: TypedSchema<PaymentLinksResourceCustomFieldsDropdown> = typed<PaymentLinksResourceCustomFieldsDropdown>(object({
  defaultValue: optional(string()),
  options: array(PaymentLinksResourceCustomFieldsDropdownOptionSchema),
}));