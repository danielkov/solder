import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsPayByBank } from './PaymentMethodOptionsPayByBank';
import { PaymentMethodOptionsPayByBankSchema } from './PaymentMethodOptionsPayByBank';
export type PayByBankUnion = PaymentMethodOptionsPayByBank | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const PayByBankUnionSchema: TypedSchema<PayByBankUnion> = typed<PayByBankUnion>(union(PaymentMethodOptionsPayByBankSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));