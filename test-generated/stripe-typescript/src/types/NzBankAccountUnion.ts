import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsNzBankAccount } from './PaymentIntentPaymentMethodOptionsNzBankAccount';
import { PaymentIntentPaymentMethodOptionsNzBankAccountSchema } from './PaymentIntentPaymentMethodOptionsNzBankAccount';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type NzBankAccountUnion = PaymentIntentPaymentMethodOptionsNzBankAccount | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const NzBankAccountUnionSchema: TypedSchema<NzBankAccountUnion> = typed<NzBankAccountUnion>(union(PaymentIntentPaymentMethodOptionsNzBankAccountSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));