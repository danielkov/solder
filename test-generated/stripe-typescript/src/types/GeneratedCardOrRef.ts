import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
export type GeneratedCardOrRef = string | PaymentMethod;

export const GeneratedCardOrRefSchema: TypedSchema<GeneratedCardOrRef> = typed<GeneratedCardOrRef>(union(string(), PaymentMethodSchema));