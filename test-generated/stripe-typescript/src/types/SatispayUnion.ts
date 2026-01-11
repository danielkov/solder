import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsSatispay } from './PaymentMethodOptionsSatispay';
import { PaymentMethodOptionsSatispaySchema } from './PaymentMethodOptionsSatispay';
export type SatispayUnion = PaymentMethodOptionsSatispay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const SatispayUnionSchema: TypedSchema<SatispayUnion> = typed<SatispayUnion>(union(PaymentMethodOptionsSatispaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));