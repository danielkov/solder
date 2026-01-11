import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsUsBankAccount } from './SetupIntentPaymentMethodOptionsUsBankAccount';
import { SetupIntentPaymentMethodOptionsUsBankAccountSchema } from './SetupIntentPaymentMethodOptionsUsBankAccount';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type UsBankAccountUnion2 = SetupIntentPaymentMethodOptionsUsBankAccount | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const UsBankAccountUnion2Schema: TypedSchema<UsBankAccountUnion2> = typed<UsBankAccountUnion2>(union(SetupIntentPaymentMethodOptionsUsBankAccountSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));