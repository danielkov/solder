import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsAffirm } from './PaymentMethodOptionsAffirm';
import { PaymentMethodOptionsAffirmSchema } from './PaymentMethodOptionsAffirm';
export type AffirmUnion = PaymentMethodOptionsAffirm | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AffirmUnionSchema: TypedSchema<AffirmUnion> = typed<AffirmUnion>(union(PaymentMethodOptionsAffirmSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));