import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsBacsDebit } from './PaymentIntentPaymentMethodOptionsBacsDebit';
import { PaymentIntentPaymentMethodOptionsBacsDebitSchema } from './PaymentIntentPaymentMethodOptionsBacsDebit';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type BacsDebitUnion = PaymentIntentPaymentMethodOptionsBacsDebit | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const BacsDebitUnionSchema: TypedSchema<BacsDebitUnion> = typed<BacsDebitUnion>(union(PaymentIntentPaymentMethodOptionsBacsDebitSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));