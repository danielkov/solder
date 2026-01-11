import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsCardPresent } from './SetupIntentPaymentMethodOptionsCardPresent';
import { SetupIntentPaymentMethodOptionsCardPresentSchema } from './SetupIntentPaymentMethodOptionsCardPresent';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type CardPresentUnion2 = SetupIntentPaymentMethodOptionsCardPresent | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const CardPresentUnion2Schema: TypedSchema<CardPresentUnion2> = typed<CardPresentUnion2>(union(SetupIntentPaymentMethodOptionsCardPresentSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));