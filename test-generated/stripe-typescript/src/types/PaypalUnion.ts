import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsPaypal } from './PaymentMethodOptionsPaypal';
import { PaymentMethodOptionsPaypalSchema } from './PaymentMethodOptionsPaypal';
export type PaypalUnion = PaymentMethodOptionsPaypal | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const PaypalUnionSchema: TypedSchema<PaypalUnion> = typed<PaypalUnion>(union(PaymentMethodOptionsPaypalSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));