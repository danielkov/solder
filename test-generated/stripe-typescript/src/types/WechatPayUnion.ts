import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsWechatPay } from './PaymentMethodOptionsWechatPay';
import { PaymentMethodOptionsWechatPaySchema } from './PaymentMethodOptionsWechatPay';
export type WechatPayUnion = PaymentMethodOptionsWechatPay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const WechatPayUnionSchema: TypedSchema<WechatPayUnion> = typed<WechatPayUnion>(union(PaymentMethodOptionsWechatPaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));