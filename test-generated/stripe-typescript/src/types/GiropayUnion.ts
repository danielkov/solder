import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsGiropay } from './PaymentMethodOptionsGiropay';
import { PaymentMethodOptionsGiropaySchema } from './PaymentMethodOptionsGiropay';
export type GiropayUnion = PaymentMethodOptionsGiropay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const GiropayUnionSchema: TypedSchema<GiropayUnion> = typed<GiropayUnion>(union(PaymentMethodOptionsGiropaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));