import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionCustomFieldsOption } from './PaymentPagesCheckoutSessionCustomFieldsOption';
import { PaymentPagesCheckoutSessionCustomFieldsOptionSchema } from './PaymentPagesCheckoutSessionCustomFieldsOption';
/**
 * PaymentPagesCheckoutSessionCustomFieldsDropdown
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomFieldsDropdown {
  /**
   * The value that will pre-fill on the payment page.
   */
  defaultValue?: string;
  /**
   * The options available for the customer to select. Up to 200 options allowed.
   */
  options: Array<PaymentPagesCheckoutSessionCustomFieldsOption>;
  /**
   * The option selected by the customer. This will be the `value` for the option.
   */
  value?: string;
}

export const PaymentPagesCheckoutSessionCustomFieldsDropdownSchema: TypedSchema<PaymentPagesCheckoutSessionCustomFieldsDropdown> = typed<PaymentPagesCheckoutSessionCustomFieldsDropdown>(object({
  defaultValue: optional(string()),
  options: array(PaymentPagesCheckoutSessionCustomFieldsOptionSchema),
  value: optional(string()),
}));