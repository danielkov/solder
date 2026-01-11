import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsSwish } from './PaymentIntentPaymentMethodOptionsSwish';
import { PaymentIntentPaymentMethodOptionsSwishSchema } from './PaymentIntentPaymentMethodOptionsSwish';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type SwishUnion = PaymentIntentPaymentMethodOptionsSwish | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const SwishUnionSchema: TypedSchema<SwishUnion> = typed<SwishUnion>(union(PaymentIntentPaymentMethodOptionsSwishSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));