import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type SamsungPayUnion = PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const SamsungPayUnionSchema: TypedSchema<SamsungPayUnion> = typed<SamsungPayUnion>(union(PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptionsSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));