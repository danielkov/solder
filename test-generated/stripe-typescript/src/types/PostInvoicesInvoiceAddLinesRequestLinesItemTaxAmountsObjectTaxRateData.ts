import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * tax_rate_data_param
 */
export interface PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData {
  country?: string;
  description?: string;
  displayName: string;
  inclusive: boolean;
  jurisdiction?: string;
  jurisdictionLevel?: string;
  percentage: number;
  state?: string;
  taxType?: string;
}

export const PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateDataSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData> = typed<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData>(object({
  country: optional(string()),
  description: optional(string()),
  displayName: string(),
  inclusive: boolean(),
  jurisdiction: optional(string()),
  jurisdictionLevel: optional(string()),
  percentage: number(),
  state: optional(string()),
  taxType: optional(string()),
}));