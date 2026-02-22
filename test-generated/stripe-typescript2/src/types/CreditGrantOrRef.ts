import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BillingCreditGrant } from './BillingCreditGrant';
import { BillingCreditGrantSchema } from './BillingCreditGrant';
/**
 * The credit grant associated with this credit balance transaction.
 */
export type CreditGrantOrRef = string | BillingCreditGrant;

export const CreditGrantOrRefSchema: TypedSchema<CreditGrantOrRef> = typed<CreditGrantOrRef>(union(string(), BillingCreditGrantSchema));
