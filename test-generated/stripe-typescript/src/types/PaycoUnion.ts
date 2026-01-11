import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type PaycoUnion = PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const PaycoUnionSchema: TypedSchema<PaycoUnion> = typed<PaycoUnion>(union(PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptionsSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));