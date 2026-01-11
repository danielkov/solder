import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
export type GeneratedSepaDebitOrRef = string | PaymentMethod;

export const GeneratedSepaDebitOrRefSchema: TypedSchema<GeneratedSepaDebitOrRef> = typed<GeneratedSepaDebitOrRef>(union(string(), PaymentMethodSchema));