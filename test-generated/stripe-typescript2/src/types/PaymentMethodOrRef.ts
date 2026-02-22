import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
/**
 * ID of the payment method associated with this mandate.
 */
export type PaymentMethodOrRef = string | PaymentMethod;

export const PaymentMethodOrRefSchema: TypedSchema<PaymentMethodOrRef> = typed<PaymentMethodOrRef>(union(string(), PaymentMethodSchema));
