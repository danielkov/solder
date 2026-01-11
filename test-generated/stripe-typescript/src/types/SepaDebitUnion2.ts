import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsSepaDebit } from './SetupIntentPaymentMethodOptionsSepaDebit';
import { SetupIntentPaymentMethodOptionsSepaDebitSchema } from './SetupIntentPaymentMethodOptionsSepaDebit';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type SepaDebitUnion2 = SetupIntentPaymentMethodOptionsSepaDebit | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const SepaDebitUnion2Schema: TypedSchema<SepaDebitUnion2> = typed<SepaDebitUnion2>(union(SetupIntentPaymentMethodOptionsSepaDebitSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));