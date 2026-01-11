import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceCustomFieldsDropdown } from './PaymentLinksResourceCustomFieldsDropdown';
import { PaymentLinksResourceCustomFieldsDropdownSchema } from './PaymentLinksResourceCustomFieldsDropdown';
import type { PaymentLinksResourceCustomFieldsLabel } from './PaymentLinksResourceCustomFieldsLabel';
import { PaymentLinksResourceCustomFieldsLabelSchema } from './PaymentLinksResourceCustomFieldsLabel';
import type { PaymentLinksResourceCustomFieldsNumeric } from './PaymentLinksResourceCustomFieldsNumeric';
import { PaymentLinksResourceCustomFieldsNumericSchema } from './PaymentLinksResourceCustomFieldsNumeric';
import type { PaymentLinksResourceCustomFieldsText } from './PaymentLinksResourceCustomFieldsText';
import { PaymentLinksResourceCustomFieldsTextSchema } from './PaymentLinksResourceCustomFieldsText';
/**
 * PaymentLinksResourceCustomFields
 *
 * 
 */
export interface PaymentLinksResourceCustomFields {
  /**
   * PaymentLinksResourceCustomFieldsDropdown
   *
   * 
   */
  dropdown?: PaymentLinksResourceCustomFieldsDropdown;
  /**
   * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
   */
  key: string;
  /**
   * PaymentLinksResourceCustomFieldsLabel
   *
   * 
   */
  label: PaymentLinksResourceCustomFieldsLabel;
  /**
   * PaymentLinksResourceCustomFieldsNumeric
   *
   * 
   */
  numeric?: PaymentLinksResourceCustomFieldsNumeric;
  /**
   * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
   */
  optional: boolean;
  /**
   * PaymentLinksResourceCustomFieldsText
   *
   * 
   */
  text?: PaymentLinksResourceCustomFieldsText;
  /**
   * The type of the field.
   */
  type: string;
}

export const PaymentLinksResourceCustomFieldsSchema: TypedSchema<PaymentLinksResourceCustomFields> = typed<PaymentLinksResourceCustomFields>(object({
  get dropdown() { return optional(PaymentLinksResourceCustomFieldsDropdownSchema) },
  key: string(),
  label: PaymentLinksResourceCustomFieldsLabelSchema,
  get numeric() { return optional(PaymentLinksResourceCustomFieldsNumericSchema) },
  optional: boolean(),
  get text() { return optional(PaymentLinksResourceCustomFieldsTextSchema) },
  type: string(),
}));