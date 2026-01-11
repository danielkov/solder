import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsBillie } from './PaymentMethodOptionsBillie';
import { PaymentMethodOptionsBillieSchema } from './PaymentMethodOptionsBillie';
export type BillieUnion = PaymentMethodOptionsBillie | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const BillieUnionSchema: TypedSchema<BillieUnion> = typed<BillieUnion>(union(PaymentMethodOptionsBillieSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));