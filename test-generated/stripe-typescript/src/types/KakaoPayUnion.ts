import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type KakaoPayUnion = PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const KakaoPayUnionSchema: TypedSchema<KakaoPayUnion> = typed<KakaoPayUnion>(union(PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptionsSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));