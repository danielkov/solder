import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
export type PaymentMethodOrRef = string | PaymentMethod;

export const PaymentMethodOrRefSchema: TypedSchema<PaymentMethodOrRef> = typed<PaymentMethodOrRef>(union(string(), PaymentMethodSchema));