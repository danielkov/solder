import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PaymentIntent } from './PaymentIntent';
import { PaymentIntentSchema } from './PaymentIntent';
/**
 * ID of the PaymentIntent associated with this charge, if one exists.
 */
export type PaymentIntentOrRef = string | PaymentIntent;

export const PaymentIntentOrRefSchema: TypedSchema<PaymentIntentOrRef> = typed<PaymentIntentOrRef>(union(string(), PaymentIntentSchema));
