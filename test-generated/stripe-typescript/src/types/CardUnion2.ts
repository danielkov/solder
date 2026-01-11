import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsCard } from './SetupIntentPaymentMethodOptionsCard';
import { SetupIntentPaymentMethodOptionsCardSchema } from './SetupIntentPaymentMethodOptionsCard';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type CardUnion2 = SetupIntentPaymentMethodOptionsCard | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const CardUnion2Schema: TypedSchema<CardUnion2> = typed<CardUnion2>(union(SetupIntentPaymentMethodOptionsCardSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));