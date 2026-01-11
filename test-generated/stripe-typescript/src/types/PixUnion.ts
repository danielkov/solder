import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsPix } from './PaymentMethodOptionsPix';
import { PaymentMethodOptionsPixSchema } from './PaymentMethodOptionsPix';
export type PixUnion = PaymentMethodOptionsPix | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const PixUnionSchema: TypedSchema<PixUnion> = typed<PixUnion>(union(PaymentMethodOptionsPixSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));