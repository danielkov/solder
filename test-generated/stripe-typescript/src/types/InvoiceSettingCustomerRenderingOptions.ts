import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * InvoiceSettingCustomerRenderingOptions
 *
 * 
 */
export interface InvoiceSettingCustomerRenderingOptions {
  /**
   * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
   */
  amountTaxDisplay?: string;
  /**
   * ID of the invoice rendering template to be used for this customer's invoices. If set, the template will be used on all invoices for this customer unless a template is set directly on the invoice.
   */
  template?: string;
}

export const InvoiceSettingCustomerRenderingOptionsSchema: TypedSchema<InvoiceSettingCustomerRenderingOptions> = typed<InvoiceSettingCustomerRenderingOptions>(object({
  amountTaxDisplay: optional(string()),
  template: optional(string()),
}));