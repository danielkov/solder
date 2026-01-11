import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * InvoiceRenderingPdf
 *
 * 
 */
export interface InvoiceRenderingPdf {
  /**
   * Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale.
   */
  pageSize?: string;
}

export const InvoiceRenderingPdfSchema: TypedSchema<InvoiceRenderingPdf> = typed<InvoiceRenderingPdf>(object({
  pageSize: optional(string()),
}));