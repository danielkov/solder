import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsSepaDebit } from './PaymentIntentPaymentMethodOptionsSepaDebit';
import { PaymentIntentPaymentMethodOptionsSepaDebitSchema } from './PaymentIntentPaymentMethodOptionsSepaDebit';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type SepaDebitUnion = PaymentIntentPaymentMethodOptionsSepaDebit | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const SepaDebitUnionSchema: TypedSchema<SepaDebitUnion> = typed<SepaDebitUnion>(union(PaymentIntentPaymentMethodOptionsSepaDebitSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));