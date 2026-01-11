import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsMobilepay } from './PaymentIntentPaymentMethodOptionsMobilepay';
import { PaymentIntentPaymentMethodOptionsMobilepaySchema } from './PaymentIntentPaymentMethodOptionsMobilepay';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type MobilepayUnion = PaymentIntentPaymentMethodOptionsMobilepay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const MobilepayUnionSchema: TypedSchema<MobilepayUnion> = typed<MobilepayUnion>(union(PaymentIntentPaymentMethodOptionsMobilepaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));