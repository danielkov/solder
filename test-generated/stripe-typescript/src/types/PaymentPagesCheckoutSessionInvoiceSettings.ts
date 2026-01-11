import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountTaxIdsItemUnion } from './AccountTaxIdsItemUnion';
import { AccountTaxIdsItemUnionSchema } from './AccountTaxIdsItemUnion';
import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
import type { InvoiceSettingCheckoutRenderingOptions } from './InvoiceSettingCheckoutRenderingOptions';
import { InvoiceSettingCheckoutRenderingOptionsSchema } from './InvoiceSettingCheckoutRenderingOptions';
import type { InvoiceSettingCustomField } from './InvoiceSettingCustomField';
import { InvoiceSettingCustomFieldSchema } from './InvoiceSettingCustomField';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * PaymentPagesCheckoutSessionInvoiceSettings
 *
 * 
 */
export interface PaymentPagesCheckoutSessionInvoiceSettings {
  /**
   * The account tax IDs associated with the invoice.
   */
  accountTaxIds?: Array<AccountTaxIdsItemUnion>;
  /**
   * Custom fields displayed on the invoice.
   */
  customFields?: Array<InvoiceSettingCustomField>;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Footer displayed on the invoice.
   */
  footer?: string;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: ConnectAccountReference;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * Options for invoice PDF rendering.
   */
  renderingOptions?: InvoiceSettingCheckoutRenderingOptions;
}

export const PaymentPagesCheckoutSessionInvoiceSettingsSchema: TypedSchema<PaymentPagesCheckoutSessionInvoiceSettings> = typed<PaymentPagesCheckoutSessionInvoiceSettings>(object({
  get accountTaxIds() { return optional(array(AccountTaxIdsItemUnionSchema)) },
  get customFields() { return optional(array(InvoiceSettingCustomFieldSchema)) },
  description: optional(string()),
  footer: optional(string()),
  get issuer() { return optional(ConnectAccountReferenceSchema) },
  get metadata() { return optional(MetadataPropertySchema) },
  get renderingOptions() { return optional(InvoiceSettingCheckoutRenderingOptionsSchema) },
}));