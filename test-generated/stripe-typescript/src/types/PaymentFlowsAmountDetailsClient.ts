import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsAmountDetailsClientResourceTip } from './PaymentFlowsAmountDetailsClientResourceTip';
import { PaymentFlowsAmountDetailsClientResourceTipSchema } from './PaymentFlowsAmountDetailsClientResourceTip';
/**
 * PaymentFlowsAmountDetailsClient
 *
 * 
 */
export interface PaymentFlowsAmountDetailsClient {
  /**
   * PaymentFlowsAmountDetailsClientResourceTip
   *
   * 
   */
  tip?: PaymentFlowsAmountDetailsClientResourceTip;
}

export const PaymentFlowsAmountDetailsClientSchema: TypedSchema<PaymentFlowsAmountDetailsClient> = typed<PaymentFlowsAmountDetailsClient>(object({
  get tip() { return optional(PaymentFlowsAmountDetailsClientResourceTipSchema) },
}));