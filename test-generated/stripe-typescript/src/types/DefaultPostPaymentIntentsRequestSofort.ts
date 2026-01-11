import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestSofortObject } from './DefaultPostPaymentIntentsRequestSofortObject';
import { DefaultPostPaymentIntentsRequestSofortObjectSchema } from './DefaultPostPaymentIntentsRequestSofortObject';
export type DefaultPostPaymentIntentsRequestSofort = DefaultPostPaymentIntentsRequestSofortObject | string;

export const DefaultPostPaymentIntentsRequestSofortSchema: TypedSchema<DefaultPostPaymentIntentsRequestSofort> = typed<DefaultPostPaymentIntentsRequestSofort>(union(DefaultPostPaymentIntentsRequestSofortObjectSchema, string()));