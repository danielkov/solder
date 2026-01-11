import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestEpsObject } from './DefaultPostPaymentIntentsRequestEpsObject';
import { DefaultPostPaymentIntentsRequestEpsObjectSchema } from './DefaultPostPaymentIntentsRequestEpsObject';
export type DefaultPostPaymentIntentsRequestEps = DefaultPostPaymentIntentsRequestEpsObject | string;

export const DefaultPostPaymentIntentsRequestEpsSchema: TypedSchema<DefaultPostPaymentIntentsRequestEps> = typed<DefaultPostPaymentIntentsRequestEps>(union(DefaultPostPaymentIntentsRequestEpsObjectSchema, string()));