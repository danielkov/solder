import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax
 *
 * 
 */
export interface PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax {
  /**
   * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.

This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
   */
  totalTaxAmount: number;
}

export const PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTaxSchema: TypedSchema<PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax> = typed<PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax>(object({
  totalTaxAmount: number(),
}));