import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { LineItemsProperty2 } from './LineItemsProperty2';
import { LineItemsProperty2Schema } from './LineItemsProperty2';
import type { PaymentFlowsAmountDetailsClientResourceTip } from './PaymentFlowsAmountDetailsClientResourceTip';
import { PaymentFlowsAmountDetailsClientResourceTipSchema } from './PaymentFlowsAmountDetailsClientResourceTip';
import type { PaymentFlowsAmountDetailsResourceShipping } from './PaymentFlowsAmountDetailsResourceShipping';
import { PaymentFlowsAmountDetailsResourceShippingSchema } from './PaymentFlowsAmountDetailsResourceShipping';
import type { PaymentFlowsAmountDetailsResourceTax } from './PaymentFlowsAmountDetailsResourceTax';
import { PaymentFlowsAmountDetailsResourceTaxSchema } from './PaymentFlowsAmountDetailsResourceTax';
/**
 * PaymentFlowsAmountDetails
 *
 * 
 */
export interface PaymentFlowsAmountDetails {
  /**
   * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.

This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
   */
  discountAmount?: number;
  /**
   * PaymentFlowsAmountDetailsResourceLineItemsList
   *
   * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
   */
  lineItems?: LineItemsProperty2;
  /**
   * PaymentFlowsAmountDetailsResourceShipping
   *
   * 
   */
  shipping?: PaymentFlowsAmountDetailsResourceShipping;
  /**
   * PaymentFlowsAmountDetailsResourceTax
   *
   * 
   */
  tax?: PaymentFlowsAmountDetailsResourceTax;
  /**
   * PaymentFlowsAmountDetailsClientResourceTip
   *
   * 
   */
  tip?: PaymentFlowsAmountDetailsClientResourceTip;
}

export const PaymentFlowsAmountDetailsSchema: TypedSchema<PaymentFlowsAmountDetails> = typed<PaymentFlowsAmountDetails>(object({
  discountAmount: optional(number()),
  get lineItems() { return optional(LineItemsProperty2Schema) },
  get shipping() { return optional(PaymentFlowsAmountDetailsResourceShippingSchema) },
  get tax() { return optional(PaymentFlowsAmountDetailsResourceTaxSchema) },
  get tip() { return optional(PaymentFlowsAmountDetailsClientResourceTipSchema) },
}));