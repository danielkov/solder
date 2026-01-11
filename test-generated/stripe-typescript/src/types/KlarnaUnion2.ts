import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsKlarna } from './SetupIntentPaymentMethodOptionsKlarna';
import { SetupIntentPaymentMethodOptionsKlarnaSchema } from './SetupIntentPaymentMethodOptionsKlarna';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type KlarnaUnion2 = SetupIntentPaymentMethodOptionsKlarna | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const KlarnaUnion2Schema: TypedSchema<KlarnaUnion2> = typed<KlarnaUnion2>(union(SetupIntentPaymentMethodOptionsKlarnaSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));