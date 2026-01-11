import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsEps } from './PaymentIntentPaymentMethodOptionsEps';
import { PaymentIntentPaymentMethodOptionsEpsSchema } from './PaymentIntentPaymentMethodOptionsEps';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type EpsUnion = PaymentIntentPaymentMethodOptionsEps | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const EpsUnionSchema: TypedSchema<EpsUnion> = typed<EpsUnion>(union(PaymentIntentPaymentMethodOptionsEpsSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));