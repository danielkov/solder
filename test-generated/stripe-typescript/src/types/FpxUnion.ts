import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsFpx } from './PaymentMethodOptionsFpx';
import { PaymentMethodOptionsFpxSchema } from './PaymentMethodOptionsFpx';
export type FpxUnion = PaymentMethodOptionsFpx | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const FpxUnionSchema: TypedSchema<FpxUnion> = typed<FpxUnion>(union(PaymentMethodOptionsFpxSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));