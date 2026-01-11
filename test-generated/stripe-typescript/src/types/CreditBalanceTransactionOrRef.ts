import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BillingCreditBalanceTransaction } from './BillingCreditBalanceTransaction';
import { BillingCreditBalanceTransactionSchema } from './BillingCreditBalanceTransaction';
export type CreditBalanceTransactionOrRef = string | BillingCreditBalanceTransaction;

export const CreditBalanceTransactionOrRefSchema: TypedSchema<CreditBalanceTransactionOrRef> = typed<CreditBalanceTransactionOrRef>(union(string(), BillingCreditBalanceTransactionSchema));