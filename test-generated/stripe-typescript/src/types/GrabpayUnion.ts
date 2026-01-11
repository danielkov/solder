import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsGrabpay } from './PaymentMethodOptionsGrabpay';
import { PaymentMethodOptionsGrabpaySchema } from './PaymentMethodOptionsGrabpay';
export type GrabpayUnion = PaymentMethodOptionsGrabpay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const GrabpayUnionSchema: TypedSchema<GrabpayUnion> = typed<GrabpayUnion>(union(PaymentMethodOptionsGrabpaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));