import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestBoletoObject } from './DefaultPostPaymentIntentsRequestBoletoObject';
import { DefaultPostPaymentIntentsRequestBoletoObjectSchema } from './DefaultPostPaymentIntentsRequestBoletoObject';
export type DefaultPostPaymentIntentsRequestBoleto = DefaultPostPaymentIntentsRequestBoletoObject | string;

export const DefaultPostPaymentIntentsRequestBoletoSchema: TypedSchema<DefaultPostPaymentIntentsRequestBoleto> = typed<DefaultPostPaymentIntentsRequestBoleto>(union(DefaultPostPaymentIntentsRequestBoletoObjectSchema, string()));