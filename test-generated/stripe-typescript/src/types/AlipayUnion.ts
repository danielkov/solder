import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsAlipay } from './PaymentMethodOptionsAlipay';
import { PaymentMethodOptionsAlipaySchema } from './PaymentMethodOptionsAlipay';
export type AlipayUnion = PaymentMethodOptionsAlipay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AlipayUnionSchema: TypedSchema<AlipayUnion> = typed<AlipayUnion>(union(PaymentMethodOptionsAlipaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));