import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type NaverPayUnion = PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const NaverPayUnionSchema: TypedSchema<NaverPayUnion> = typed<NaverPayUnion>(union(PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptionsSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));