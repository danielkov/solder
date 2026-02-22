import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BillingCreditBalanceTransaction } from './BillingCreditBalanceTransaction';
import { BillingCreditBalanceTransactionSchema } from './BillingCreditBalanceTransaction';
/**
 * The credit balance transaction that was applied to get this pretax credit amount.
 */
export type CreditBalanceTransactionOrRef = string | BillingCreditBalanceTransaction;

export const CreditBalanceTransactionOrRefSchema: TypedSchema<CreditBalanceTransactionOrRef> = typed<CreditBalanceTransactionOrRef>(union(string(), BillingCreditBalanceTransactionSchema));
