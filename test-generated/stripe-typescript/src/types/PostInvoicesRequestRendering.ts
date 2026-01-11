import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostInvoicesRequestPdf } from './PostInvoicesRequestPdf';
import { PostInvoicesRequestPdfSchema } from './PostInvoicesRequestPdf';
/**
 * rendering_param
 *
 * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
 */
export interface PostInvoicesRequestRendering {
  amountTaxDisplay?: string;
  /**
   * rendering_pdf_param
   */
  pdf?: PostInvoicesRequestPdf;
  template?: string;
  templateVersion?: PostBalanceSettingsRequestDelayDaysOverride;
}

export const PostInvoicesRequestRenderingSchema: TypedSchema<PostInvoicesRequestRendering> = typed<PostInvoicesRequestRendering>(object({
  amountTaxDisplay: optional(string()),
  get pdf() { return optional(PostInvoicesRequestPdfSchema) },
  template: optional(string()),
  get templateVersion() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
}));