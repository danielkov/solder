import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsTwint } from './PaymentMethodOptionsTwint';
import { PaymentMethodOptionsTwintSchema } from './PaymentMethodOptionsTwint';
export type TwintUnion = PaymentMethodOptionsTwint | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const TwintUnionSchema: TypedSchema<TwintUnion> = typed<TwintUnion>(union(PaymentMethodOptionsTwintSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));