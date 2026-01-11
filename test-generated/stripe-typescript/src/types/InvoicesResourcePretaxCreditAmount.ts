import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CreditBalanceTransactionOrRef } from './CreditBalanceTransactionOrRef';
import { CreditBalanceTransactionOrRefSchema } from './CreditBalanceTransactionOrRef';
import type { DiscountUnion } from './DiscountUnion';
import { DiscountUnionSchema } from './DiscountUnion';
/**
 * InvoicesResourcePretaxCreditAmount
 *
 * 
 */
export interface InvoicesResourcePretaxCreditAmount {
  /**
   * The amount, in cents (or local equivalent), of the pretax credit amount.
   */
  amount: number;
  /**
   * The credit balance transaction that was applied to get this pretax credit amount.
   */
  creditBalanceTransaction?: CreditBalanceTransactionOrRef;
  /**
   * The discount that was applied to get this pretax credit amount.
   */
  discount?: DiscountUnion;
  /**
   * Type of the pretax credit amount referenced.
   */
  type: string;
}

export const InvoicesResourcePretaxCreditAmountSchema: TypedSchema<InvoicesResourcePretaxCreditAmount> = typed<InvoicesResourcePretaxCreditAmount>(object({
  amount: number(),
  get creditBalanceTransaction() { return optional(CreditBalanceTransactionOrRefSchema) },
  get discount() { return optional(DiscountUnionSchema) },
  type: string(),
}));