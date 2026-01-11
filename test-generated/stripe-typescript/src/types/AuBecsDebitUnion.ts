import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsAuBecsDebit } from './PaymentIntentPaymentMethodOptionsAuBecsDebit';
import { PaymentIntentPaymentMethodOptionsAuBecsDebitSchema } from './PaymentIntentPaymentMethodOptionsAuBecsDebit';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type AuBecsDebitUnion = PaymentIntentPaymentMethodOptionsAuBecsDebit | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AuBecsDebitUnionSchema: TypedSchema<AuBecsDebitUnion> = typed<AuBecsDebitUnion>(union(PaymentIntentPaymentMethodOptionsAuBecsDebitSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));