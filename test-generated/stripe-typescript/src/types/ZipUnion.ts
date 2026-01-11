import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsZip } from './PaymentMethodOptionsZip';
import { PaymentMethodOptionsZipSchema } from './PaymentMethodOptionsZip';
export type ZipUnion = PaymentMethodOptionsZip | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const ZipUnionSchema: TypedSchema<ZipUnion> = typed<ZipUnion>(union(PaymentMethodOptionsZipSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));