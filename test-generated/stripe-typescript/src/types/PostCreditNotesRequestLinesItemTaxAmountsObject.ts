import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * tax_amount_with_tax_rate_param
 */
export interface PostCreditNotesRequestLinesItemTaxAmountsObject {
  amount: number;
  taxRate: string;
  taxableAmount: number;
}

export const PostCreditNotesRequestLinesItemTaxAmountsObjectSchema: TypedSchema<PostCreditNotesRequestLinesItemTaxAmountsObject> = typed<PostCreditNotesRequestLinesItemTaxAmountsObject>(object({
  amount: number(),
  taxRate: string(),
  taxableAmount: number(),
}));