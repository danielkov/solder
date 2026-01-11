import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
export type DefaultPaymentMethodOrRef = string | PaymentMethod;

export const DefaultPaymentMethodOrRefSchema: TypedSchema<DefaultPaymentMethodOrRef> = typed<DefaultPaymentMethodOrRef>(union(string(), PaymentMethodSchema));