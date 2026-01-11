import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceRenderingPdf } from './InvoiceRenderingPdf';
import { InvoiceRenderingPdfSchema } from './InvoiceRenderingPdf';
/**
 * InvoicesResourceInvoiceRendering
 *
 * 
 */
export interface InvoicesResourceInvoiceRendering {
  /**
   * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
   */
  amountTaxDisplay?: string;
  /**
   * Invoice pdf rendering options
   */
  pdf?: InvoiceRenderingPdf;
  /**
   * ID of the rendering template that the invoice is formatted by.
   */
  template?: string;
  /**
   * Version of the rendering template that the invoice is using.
   */
  templateVersion?: number;
}

export const InvoicesResourceInvoiceRenderingSchema: TypedSchema<InvoicesResourceInvoiceRendering> = typed<InvoicesResourceInvoiceRendering>(object({
  amountTaxDisplay: optional(string()),
  get pdf() { return optional(InvoiceRenderingPdfSchema) },
  template: optional(string()),
  templateVersion: optional(number()),
}));