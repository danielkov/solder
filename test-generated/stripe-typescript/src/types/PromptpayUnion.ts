import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsPromptpay } from './PaymentMethodOptionsPromptpay';
import { PaymentMethodOptionsPromptpaySchema } from './PaymentMethodOptionsPromptpay';
export type PromptpayUnion = PaymentMethodOptionsPromptpay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const PromptpayUnionSchema: TypedSchema<PromptpayUnion> = typed<PromptpayUnion>(union(PaymentMethodOptionsPromptpaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));