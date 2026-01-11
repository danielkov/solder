import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax
 *
 * 
 */
export interface PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax {
  /**
   * The [TaxCalculation](https://stripe.com/docs/api/tax/calculations) id
   */
  calculation: string;
}

export const PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTaxSchema: TypedSchema<PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax> = typed<PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax>(object({
  calculation: string(),
}));