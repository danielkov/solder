import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsAcssDebit } from './SetupIntentPaymentMethodOptionsAcssDebit';
import { SetupIntentPaymentMethodOptionsAcssDebitSchema } from './SetupIntentPaymentMethodOptionsAcssDebit';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type AcssDebitUnion2 = SetupIntentPaymentMethodOptionsAcssDebit | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const AcssDebitUnion2Schema: TypedSchema<AcssDebitUnion2> = typed<AcssDebitUnion2>(union(SetupIntentPaymentMethodOptionsAcssDebitSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));