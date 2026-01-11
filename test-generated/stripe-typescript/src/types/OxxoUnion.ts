import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsOxxo } from './PaymentMethodOptionsOxxo';
import { PaymentMethodOptionsOxxoSchema } from './PaymentMethodOptionsOxxo';
export type OxxoUnion = PaymentMethodOptionsOxxo | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const OxxoUnionSchema: TypedSchema<OxxoUnion> = typed<OxxoUnion>(union(PaymentMethodOptionsOxxoSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));