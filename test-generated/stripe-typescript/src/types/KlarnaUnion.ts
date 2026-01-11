import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsKlarna } from './PaymentMethodOptionsKlarna';
import { PaymentMethodOptionsKlarnaSchema } from './PaymentMethodOptionsKlarna';
export type KlarnaUnion = PaymentMethodOptionsKlarna | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const KlarnaUnionSchema: TypedSchema<KlarnaUnion> = typed<KlarnaUnion>(union(PaymentMethodOptionsKlarnaSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));