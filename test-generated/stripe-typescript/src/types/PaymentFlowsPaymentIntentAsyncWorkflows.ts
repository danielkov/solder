import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs } from './PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs';
import { PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsSchema } from './PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs';
/**
 * PaymentFlowsPaymentIntentAsyncWorkflows
 *
 * 
 */
export interface PaymentFlowsPaymentIntentAsyncWorkflows {
  /**
   * PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs
   *
   * 
   */
  inputs?: PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs;
}

export const PaymentFlowsPaymentIntentAsyncWorkflowsSchema: TypedSchema<PaymentFlowsPaymentIntentAsyncWorkflows> = typed<PaymentFlowsPaymentIntentAsyncWorkflows>(object({
  get inputs() { return optional(PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsSchema) },
}));