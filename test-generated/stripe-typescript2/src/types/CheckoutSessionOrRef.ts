import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { CheckoutSession } from './CheckoutSession';
import { CheckoutSessionSchema } from './CheckoutSession';
/**
 * The ID of the checkout session (if any) that created the transaction.
 */
export type CheckoutSessionOrRef = string | CheckoutSession;

export const CheckoutSessionOrRefSchema: TypedSchema<CheckoutSessionOrRef> = typed<CheckoutSessionOrRef>(union(string(), CheckoutSessionSchema));
