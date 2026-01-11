import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsAmazonPay } from './SetupIntentPaymentMethodOptionsAmazonPay';
import { SetupIntentPaymentMethodOptionsAmazonPaySchema } from './SetupIntentPaymentMethodOptionsAmazonPay';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type AmazonPayUnion2 = SetupIntentPaymentMethodOptionsAmazonPay | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const AmazonPayUnion2Schema: TypedSchema<AmazonPayUnion2> = typed<AmazonPayUnion2>(union(SetupIntentPaymentMethodOptionsAmazonPaySchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));