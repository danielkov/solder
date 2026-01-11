import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax } from './PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax';
import { PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTaxSchema } from './PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax';
/**
 * PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs
 *
 * 
 */
export interface PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs {
  /**
   * PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax
   *
   * 
   */
  tax?: PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax;
}

export const PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsSchema: TypedSchema<PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs> = typed<PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs>(object({
  get tax() { return optional(PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTaxSchema) },
}));