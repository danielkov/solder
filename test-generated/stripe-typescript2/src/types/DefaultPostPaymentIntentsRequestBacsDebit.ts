import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestBacsDebitObject } from './DefaultPostPaymentIntentsRequestBacsDebitObject';
import { DefaultPostPaymentIntentsRequestBacsDebitObjectSchema } from './DefaultPostPaymentIntentsRequestBacsDebitObject';
export type DefaultPostPaymentIntentsRequestBacsDebit = DefaultPostPaymentIntentsRequestBacsDebitObject | string;

export const DefaultPostPaymentIntentsRequestBacsDebitSchema: TypedSchema<DefaultPostPaymentIntentsRequestBacsDebit> = typed<DefaultPostPaymentIntentsRequestBacsDebit>(union(DefaultPostPaymentIntentsRequestBacsDebitObjectSchema, string()));
