import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData';
import { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateDataSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData';
/**
 * tax_amount_param
 */
export interface PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject {
  amount: number;
  /**
   * tax_rate_data_param
   */
  taxRateData: PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData;
  taxabilityReason?: string;
  taxableAmount: number;
}

export const PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject> = typed<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject>(object({
  amount: number(),
  taxRateData: PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateDataSchema,
  taxabilityReason: optional(string()),
  taxableAmount: number(),
}));