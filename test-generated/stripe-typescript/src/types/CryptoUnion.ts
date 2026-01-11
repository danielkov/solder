import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsCrypto } from './PaymentMethodOptionsCrypto';
import { PaymentMethodOptionsCryptoSchema } from './PaymentMethodOptionsCrypto';
export type CryptoUnion = PaymentMethodOptionsCrypto | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const CryptoUnionSchema: TypedSchema<CryptoUnion> = typed<CryptoUnion>(union(PaymentMethodOptionsCryptoSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));