import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPaymentMethodOrRef } from './DefaultPaymentMethodOrRef';
import { DefaultPaymentMethodOrRefSchema } from './DefaultPaymentMethodOrRef';
import type { InvoiceSettingCustomField } from './InvoiceSettingCustomField';
import { InvoiceSettingCustomFieldSchema } from './InvoiceSettingCustomField';
import type { InvoiceSettingCustomerRenderingOptions } from './InvoiceSettingCustomerRenderingOptions';
import { InvoiceSettingCustomerRenderingOptionsSchema } from './InvoiceSettingCustomerRenderingOptions';
/**
 * InvoiceSettingCustomerSetting
 *
 * 
 */
export interface InvoiceSettingCustomerSetting {
  /**
   * Default custom fields to be displayed on invoices for this customer.
   */
  customFields?: Array<InvoiceSettingCustomField>;
  /**
   * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
   */
  defaultPaymentMethod?: DefaultPaymentMethodOrRef;
  /**
   * Default footer to be displayed on invoices for this customer.
   */
  footer?: string;
  /**
   * Default options for invoice PDF rendering for this customer.
   */
  renderingOptions?: InvoiceSettingCustomerRenderingOptions;
}

export const InvoiceSettingCustomerSettingSchema: TypedSchema<InvoiceSettingCustomerSetting> = typed<InvoiceSettingCustomerSetting>(object({
  get customFields() { return optional(array(InvoiceSettingCustomFieldSchema)) },
  get defaultPaymentMethod() { return optional(DefaultPaymentMethodOrRefSchema) },
  footer: optional(string()),
  get renderingOptions() { return optional(InvoiceSettingCustomerRenderingOptionsSchema) },
}));