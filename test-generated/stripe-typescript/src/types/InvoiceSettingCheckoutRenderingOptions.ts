import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_setting_checkout_rendering_options
 *
 * 
 */
export interface InvoiceSettingCheckoutRenderingOptions {
  /**
   * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
   */
  amountTaxDisplay?: string;
  /**
   * ID of the invoice rendering template to be used for the generated invoice.
   */
  template?: string;
}

export const InvoiceSettingCheckoutRenderingOptionsSchema: TypedSchema<InvoiceSettingCheckoutRenderingOptions> = typed<InvoiceSettingCheckoutRenderingOptions>(object({
  amountTaxDisplay: optional(string()),
  template: optional(string()),
}));