import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsAmountDetailsResourceTax
 *
 * 
 */
export interface PaymentFlowsAmountDetailsResourceTax {
  /**
   * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.

This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
   */
  totalTaxAmount?: number;
}

export const PaymentFlowsAmountDetailsResourceTaxSchema: TypedSchema<PaymentFlowsAmountDetailsResourceTax> = typed<PaymentFlowsAmountDetailsResourceTax>(object({
  totalTaxAmount: optional(number()),
}));