import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsInteracPresent } from './PaymentMethodOptionsInteracPresent';
import { PaymentMethodOptionsInteracPresentSchema } from './PaymentMethodOptionsInteracPresent';
export type InteracPresentUnion = PaymentMethodOptionsInteracPresent | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const InteracPresentUnionSchema: TypedSchema<InteracPresentUnion> = typed<InteracPresentUnion>(union(PaymentMethodOptionsInteracPresentSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));