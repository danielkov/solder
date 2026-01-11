import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsAlma } from './PaymentMethodOptionsAlma';
import { PaymentMethodOptionsAlmaSchema } from './PaymentMethodOptionsAlma';
export type AlmaUnion = PaymentMethodOptionsAlma | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AlmaUnionSchema: TypedSchema<AlmaUnion> = typed<AlmaUnion>(union(PaymentMethodOptionsAlmaSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));