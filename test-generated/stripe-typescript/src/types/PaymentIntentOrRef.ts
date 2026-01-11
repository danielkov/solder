import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntent } from './PaymentIntent';
import { PaymentIntentSchema } from './PaymentIntent';
export type PaymentIntentOrRef = string | PaymentIntent;

export const PaymentIntentOrRefSchema: TypedSchema<PaymentIntentOrRef> = typed<PaymentIntentOrRef>(union(string(), PaymentIntentSchema));