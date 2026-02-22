import { typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsMultibanco } from './PaymentMethodOptionsMultibanco';
import { PaymentMethodOptionsMultibancoSchema } from './PaymentMethodOptionsMultibanco';
export type MultibancoUnion = PaymentMethodOptionsMultibanco | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const MultibancoUnionSchema: TypedSchema<MultibancoUnion> = typed<MultibancoUnion>(union(PaymentMethodOptionsMultibancoSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));
