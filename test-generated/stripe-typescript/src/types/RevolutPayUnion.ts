import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsRevolutPay } from './PaymentMethodOptionsRevolutPay';
import { PaymentMethodOptionsRevolutPaySchema } from './PaymentMethodOptionsRevolutPay';
export type RevolutPayUnion = PaymentMethodOptionsRevolutPay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const RevolutPayUnionSchema: TypedSchema<RevolutPayUnion> = typed<RevolutPayUnion>(union(PaymentMethodOptionsRevolutPaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));