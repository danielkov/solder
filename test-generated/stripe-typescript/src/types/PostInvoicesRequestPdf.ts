import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * rendering_pdf_param
 */
export interface PostInvoicesRequestPdf {
  pageSize?: string;
}

export const PostInvoicesRequestPdfSchema: TypedSchema<PostInvoicesRequestPdf> = typed<PostInvoicesRequestPdf>(object({
  pageSize: optional(string()),
}));