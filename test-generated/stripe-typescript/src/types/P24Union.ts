import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsP24 } from './PaymentMethodOptionsP24';
import { PaymentMethodOptionsP24Schema } from './PaymentMethodOptionsP24';
export type P24Union = PaymentMethodOptionsP24 | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const P24UnionSchema: TypedSchema<P24Union> = typed<P24Union>(union(PaymentMethodOptionsP24Schema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));