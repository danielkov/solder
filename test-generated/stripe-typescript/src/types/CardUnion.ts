import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsCard } from './PaymentIntentPaymentMethodOptionsCard';
import { PaymentIntentPaymentMethodOptionsCardSchema } from './PaymentIntentPaymentMethodOptionsCard';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type CardUnion = PaymentIntentPaymentMethodOptionsCard | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const CardUnionSchema: TypedSchema<CardUnion> = typed<CardUnion>(union(PaymentIntentPaymentMethodOptionsCardSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));