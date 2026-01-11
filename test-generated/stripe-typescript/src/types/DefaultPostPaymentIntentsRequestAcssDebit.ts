import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestAcssDebitObject } from './DefaultPostPaymentIntentsRequestAcssDebitObject';
import { DefaultPostPaymentIntentsRequestAcssDebitObjectSchema } from './DefaultPostPaymentIntentsRequestAcssDebitObject';
export type DefaultPostPaymentIntentsRequestAcssDebit = DefaultPostPaymentIntentsRequestAcssDebitObject | string;

export const DefaultPostPaymentIntentsRequestAcssDebitSchema: TypedSchema<DefaultPostPaymentIntentsRequestAcssDebit> = typed<DefaultPostPaymentIntentsRequestAcssDebit>(union(DefaultPostPaymentIntentsRequestAcssDebitObjectSchema, string()));