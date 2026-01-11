import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsCardPresent } from './PaymentMethodOptionsCardPresent';
import { PaymentMethodOptionsCardPresentSchema } from './PaymentMethodOptionsCardPresent';
export type CardPresentUnion = PaymentMethodOptionsCardPresent | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const CardPresentUnionSchema: TypedSchema<CardPresentUnion> = typed<CardPresentUnion>(union(PaymentMethodOptionsCardPresentSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));