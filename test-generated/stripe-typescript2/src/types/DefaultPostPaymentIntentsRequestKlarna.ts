import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestKlarnaObject } from './DefaultPostPaymentIntentsRequestKlarnaObject';
import { DefaultPostPaymentIntentsRequestKlarnaObjectSchema } from './DefaultPostPaymentIntentsRequestKlarnaObject';
export type DefaultPostPaymentIntentsRequestKlarna = DefaultPostPaymentIntentsRequestKlarnaObject | string;

export const DefaultPostPaymentIntentsRequestKlarnaSchema: TypedSchema<DefaultPostPaymentIntentsRequestKlarna> = typed<DefaultPostPaymentIntentsRequestKlarna>(union(DefaultPostPaymentIntentsRequestKlarnaObjectSchema, string()));
