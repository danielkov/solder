import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsBoleto } from './PaymentMethodOptionsBoleto';
import { PaymentMethodOptionsBoletoSchema } from './PaymentMethodOptionsBoleto';
export type BoletoUnion = PaymentMethodOptionsBoleto | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const BoletoUnionSchema: TypedSchema<BoletoUnion> = typed<BoletoUnion>(union(PaymentMethodOptionsBoletoSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));