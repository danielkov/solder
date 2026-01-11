import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsAcssDebit } from './PaymentIntentPaymentMethodOptionsAcssDebit';
import { PaymentIntentPaymentMethodOptionsAcssDebitSchema } from './PaymentIntentPaymentMethodOptionsAcssDebit';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type AcssDebitUnion = PaymentIntentPaymentMethodOptionsAcssDebit | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AcssDebitUnionSchema: TypedSchema<AcssDebitUnion> = typed<AcssDebitUnion>(union(PaymentIntentPaymentMethodOptionsAcssDebitSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));