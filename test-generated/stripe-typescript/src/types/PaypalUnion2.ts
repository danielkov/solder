import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsPaypal } from './SetupIntentPaymentMethodOptionsPaypal';
import { SetupIntentPaymentMethodOptionsPaypalSchema } from './SetupIntentPaymentMethodOptionsPaypal';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type PaypalUnion2 = SetupIntentPaymentMethodOptionsPaypal | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const PaypalUnion2Schema: TypedSchema<PaypalUnion2> = typed<PaypalUnion2>(union(SetupIntentPaymentMethodOptionsPaypalSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));