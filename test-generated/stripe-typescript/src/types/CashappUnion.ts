import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsCashapp } from './PaymentMethodOptionsCashapp';
import { PaymentMethodOptionsCashappSchema } from './PaymentMethodOptionsCashapp';
export type CashappUnion = PaymentMethodOptionsCashapp | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const CashappUnionSchema: TypedSchema<CashappUnion> = typed<CashappUnion>(union(PaymentMethodOptionsCashappSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));