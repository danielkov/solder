import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsBacsDebit } from './SetupIntentPaymentMethodOptionsBacsDebit';
import { SetupIntentPaymentMethodOptionsBacsDebitSchema } from './SetupIntentPaymentMethodOptionsBacsDebit';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type BacsDebitUnion2 = SetupIntentPaymentMethodOptionsBacsDebit | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const BacsDebitUnion2Schema: TypedSchema<BacsDebitUnion2> = typed<BacsDebitUnion2>(union(SetupIntentPaymentMethodOptionsBacsDebitSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));