import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsKrCard } from './PaymentMethodOptionsKrCard';
import { PaymentMethodOptionsKrCardSchema } from './PaymentMethodOptionsKrCard';
export type KrCardUnion = PaymentMethodOptionsKrCard | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const KrCardUnionSchema: TypedSchema<KrCardUnion> = typed<KrCardUnion>(union(PaymentMethodOptionsKrCardSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));