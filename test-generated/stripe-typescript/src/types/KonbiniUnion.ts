import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsKonbini } from './PaymentMethodOptionsKonbini';
import { PaymentMethodOptionsKonbiniSchema } from './PaymentMethodOptionsKonbini';
export type KonbiniUnion = PaymentMethodOptionsKonbini | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const KonbiniUnionSchema: TypedSchema<KonbiniUnion> = typed<KonbiniUnion>(union(PaymentMethodOptionsKonbiniSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));