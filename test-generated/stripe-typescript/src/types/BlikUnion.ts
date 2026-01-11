import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsBlik } from './PaymentIntentPaymentMethodOptionsBlik';
import { PaymentIntentPaymentMethodOptionsBlikSchema } from './PaymentIntentPaymentMethodOptionsBlik';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type BlikUnion = PaymentIntentPaymentMethodOptionsBlik | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const BlikUnionSchema: TypedSchema<BlikUnion> = typed<BlikUnion>(union(PaymentIntentPaymentMethodOptionsBlikSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));