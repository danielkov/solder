import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { CheckoutSession } from './CheckoutSession';
import { CheckoutSessionSchema } from './CheckoutSession';
export type CheckoutSessionOrRef = string | CheckoutSession;

export const CheckoutSessionOrRefSchema: TypedSchema<CheckoutSessionOrRef> = typed<CheckoutSessionOrRef>(union(string(), CheckoutSessionSchema));