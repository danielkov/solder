import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsBancontact } from './PaymentMethodOptionsBancontact';
import { PaymentMethodOptionsBancontactSchema } from './PaymentMethodOptionsBancontact';
export type BancontactUnion = PaymentMethodOptionsBancontact | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const BancontactUnionSchema: TypedSchema<BancontactUnion> = typed<BancontactUnion>(union(PaymentMethodOptionsBancontactSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));