import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsMbWay } from './PaymentMethodOptionsMbWay';
import { PaymentMethodOptionsMbWaySchema } from './PaymentMethodOptionsMbWay';
export type MbWayUnion = PaymentMethodOptionsMbWay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const MbWayUnionSchema: TypedSchema<MbWayUnion> = typed<MbWayUnion>(union(PaymentMethodOptionsMbWaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));