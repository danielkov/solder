import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsSofort } from './PaymentMethodOptionsSofort';
import { PaymentMethodOptionsSofortSchema } from './PaymentMethodOptionsSofort';
export type SofortUnion = PaymentMethodOptionsSofort | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const SofortUnionSchema: TypedSchema<SofortUnion> = typed<SofortUnion>(union(PaymentMethodOptionsSofortSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));