import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsPaynow } from './PaymentMethodOptionsPaynow';
import { PaymentMethodOptionsPaynowSchema } from './PaymentMethodOptionsPaynow';
export type PaynowUnion = PaymentMethodOptionsPaynow | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const PaynowUnionSchema: TypedSchema<PaynowUnion> = typed<PaynowUnion>(union(PaymentMethodOptionsPaynowSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));