import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsAmazonPay } from './PaymentMethodOptionsAmazonPay';
import { PaymentMethodOptionsAmazonPaySchema } from './PaymentMethodOptionsAmazonPay';
export type AmazonPayUnion = PaymentMethodOptionsAmazonPay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AmazonPayUnionSchema: TypedSchema<AmazonPayUnion> = typed<AmazonPayUnion>(union(PaymentMethodOptionsAmazonPaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));