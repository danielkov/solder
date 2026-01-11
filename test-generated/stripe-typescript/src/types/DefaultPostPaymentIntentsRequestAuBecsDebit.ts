import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestAuBecsDebitObject } from './DefaultPostPaymentIntentsRequestAuBecsDebitObject';
import { DefaultPostPaymentIntentsRequestAuBecsDebitObjectSchema } from './DefaultPostPaymentIntentsRequestAuBecsDebitObject';
export type DefaultPostPaymentIntentsRequestAuBecsDebit = DefaultPostPaymentIntentsRequestAuBecsDebitObject | string;

export const DefaultPostPaymentIntentsRequestAuBecsDebitSchema: TypedSchema<DefaultPostPaymentIntentsRequestAuBecsDebit> = typed<DefaultPostPaymentIntentsRequestAuBecsDebit>(union(DefaultPostPaymentIntentsRequestAuBecsDebitObjectSchema, string()));