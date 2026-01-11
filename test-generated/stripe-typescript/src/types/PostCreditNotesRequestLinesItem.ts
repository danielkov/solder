import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostCreditNotesRequestLinesItemTaxAmounts } from './PostCreditNotesRequestLinesItemTaxAmounts';
import { PostCreditNotesRequestLinesItemTaxAmountsSchema } from './PostCreditNotesRequestLinesItemTaxAmounts';
/**
 * credit_note_line_item_params
 */
export interface PostCreditNotesRequestLinesItem {
  amount?: number;
  description?: string;
  invoiceLineItem?: string;
  quantity?: number;
  taxAmounts?: PostCreditNotesRequestLinesItemTaxAmounts;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
  type: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostCreditNotesRequestLinesItemSchema: TypedSchema<PostCreditNotesRequestLinesItem> = typed<PostCreditNotesRequestLinesItem>(object({
  amount: optional(number()),
  description: optional(string()),
  invoiceLineItem: optional(string()),
  quantity: optional(number()),
  get taxAmounts() { return optional(PostCreditNotesRequestLinesItemTaxAmountsSchema) },
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  type: string(),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));