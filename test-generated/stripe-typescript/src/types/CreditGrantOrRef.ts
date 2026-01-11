import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BillingCreditGrant } from './BillingCreditGrant';
import { BillingCreditGrantSchema } from './BillingCreditGrant';
export type CreditGrantOrRef = string | BillingCreditGrant;

export const CreditGrantOrRefSchema: TypedSchema<CreditGrantOrRef> = typed<CreditGrantOrRef>(union(string(), BillingCreditGrantSchema));