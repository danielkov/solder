import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionCustomFieldsDropdown } from './PaymentPagesCheckoutSessionCustomFieldsDropdown';
import { PaymentPagesCheckoutSessionCustomFieldsDropdownSchema } from './PaymentPagesCheckoutSessionCustomFieldsDropdown';
import type { PaymentPagesCheckoutSessionCustomFieldsLabel } from './PaymentPagesCheckoutSessionCustomFieldsLabel';
import { PaymentPagesCheckoutSessionCustomFieldsLabelSchema } from './PaymentPagesCheckoutSessionCustomFieldsLabel';
import type { PaymentPagesCheckoutSessionCustomFieldsNumeric } from './PaymentPagesCheckoutSessionCustomFieldsNumeric';
import { PaymentPagesCheckoutSessionCustomFieldsNumericSchema } from './PaymentPagesCheckoutSessionCustomFieldsNumeric';
import type { PaymentPagesCheckoutSessionCustomFieldsText } from './PaymentPagesCheckoutSessionCustomFieldsText';
import { PaymentPagesCheckoutSessionCustomFieldsTextSchema } from './PaymentPagesCheckoutSessionCustomFieldsText';
/**
 * PaymentPagesCheckoutSessionCustomFields
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomFields {
  /**
   * PaymentPagesCheckoutSessionCustomFieldsDropdown
   *
   * 
   */
  dropdown?: PaymentPagesCheckoutSessionCustomFieldsDropdown;
  /**
   * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
   */
  key: string;
  /**
   * PaymentPagesCheckoutSessionCustomFieldsLabel
   *
   * 
   */
  label: PaymentPagesCheckoutSessionCustomFieldsLabel;
  /**
   * PaymentPagesCheckoutSessionCustomFieldsNumeric
   *
   * 
   */
  numeric?: PaymentPagesCheckoutSessionCustomFieldsNumeric;
  /**
   * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
   */
  optional: boolean;
  /**
   * PaymentPagesCheckoutSessionCustomFieldsText
   *
   * 
   */
  text?: PaymentPagesCheckoutSessionCustomFieldsText;
  /**
   * The type of the field.
   */
  type: string;
}

export const PaymentPagesCheckoutSessionCustomFieldsSchema: TypedSchema<PaymentPagesCheckoutSessionCustomFields> = typed<PaymentPagesCheckoutSessionCustomFields>(object({
  get dropdown() { return optional(PaymentPagesCheckoutSessionCustomFieldsDropdownSchema) },
  key: string(),
  label: PaymentPagesCheckoutSessionCustomFieldsLabelSchema,
  get numeric() { return optional(PaymentPagesCheckoutSessionCustomFieldsNumericSchema) },
  optional: boolean(),
  get text() { return optional(PaymentPagesCheckoutSessionCustomFieldsTextSchema) },
  type: string(),
}));