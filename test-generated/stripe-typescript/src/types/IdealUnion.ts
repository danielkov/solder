import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsIdeal } from './PaymentMethodOptionsIdeal';
import { PaymentMethodOptionsIdealSchema } from './PaymentMethodOptionsIdeal';
export type IdealUnion = PaymentMethodOptionsIdeal | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const IdealUnionSchema: TypedSchema<IdealUnion> = typed<IdealUnion>(union(PaymentMethodOptionsIdealSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));