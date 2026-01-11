import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsUsBankAccount } from './PaymentIntentPaymentMethodOptionsUsBankAccount';
import { PaymentIntentPaymentMethodOptionsUsBankAccountSchema } from './PaymentIntentPaymentMethodOptionsUsBankAccount';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type UsBankAccountUnion = PaymentIntentPaymentMethodOptionsUsBankAccount | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const UsBankAccountUnionSchema: TypedSchema<UsBankAccountUnion> = typed<UsBankAccountUnion>(union(PaymentIntentPaymentMethodOptionsUsBankAccountSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));