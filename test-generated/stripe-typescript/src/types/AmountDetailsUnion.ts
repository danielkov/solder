import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentFlowsAmountDetails } from './PaymentFlowsAmountDetails';
import { PaymentFlowsAmountDetailsSchema } from './PaymentFlowsAmountDetails';
import type { PaymentFlowsAmountDetailsClient } from './PaymentFlowsAmountDetailsClient';
import { PaymentFlowsAmountDetailsClientSchema } from './PaymentFlowsAmountDetailsClient';
export type AmountDetailsUnion = PaymentFlowsAmountDetails | PaymentFlowsAmountDetailsClient;

export const AmountDetailsUnionSchema: TypedSchema<AmountDetailsUnion> = typed<AmountDetailsUnion>(union(PaymentFlowsAmountDetailsSchema, PaymentFlowsAmountDetailsClientSchema));