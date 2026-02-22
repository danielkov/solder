import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
/**
 * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
 */
export type DefaultPaymentMethodOrRef = string | PaymentMethod;

export const DefaultPaymentMethodOrRefSchema: TypedSchema<DefaultPaymentMethodOrRef> = typed<DefaultPaymentMethodOrRef>(union(string(), PaymentMethodSchema));
