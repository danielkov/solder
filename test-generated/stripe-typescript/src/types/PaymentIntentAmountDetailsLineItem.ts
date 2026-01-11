import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions } from './PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions';
import { PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptionsSchema } from './PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions';
import type { PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax } from './PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax';
import { PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTaxSchema } from './PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax';
/**
 * PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItem
 *
 * 
 */
export interface PaymentIntentAmountDetailsLineItem {
  /**
   * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.

This field is mutually exclusive with the `amount_details[discount_amount]` field.
   */
  discountAmount?: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Payment method-specific information for line items.
   */
  paymentMethodOptions?: PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions;
  /**
   * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
   */
  productCode?: string;
  /**
   * The product name of the line item. Required for L3 rates. At most 1024 characters long.

For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
   */
  productName: string;
  /**
   * The quantity of items. Required for L3 rates. An integer greater than 0.
   */
  quantity: number;
  /**
   * Contains information about the tax on the item.
   */
  tax?: PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax;
  /**
   * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
   */
  unitCost: number;
  /**
   * A unit of measure for the line item, such as gallons, feet, meters, etc. Required for L3 rates. At most 12 alphanumeric characters long.
   */
  unitOfMeasure?: string;
}

export const PaymentIntentAmountDetailsLineItemSchema: TypedSchema<PaymentIntentAmountDetailsLineItem> = typed<PaymentIntentAmountDetailsLineItem>(object({
  discountAmount: optional(number()),
  id: string(),
  object: string(),
  get paymentMethodOptions() { return optional(PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptionsSchema) },
  productCode: optional(string()),
  productName: string(),
  quantity: number(),
  get tax() { return optional(PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTaxSchema) },
  unitCost: number(),
  unitOfMeasure: optional(string()),
}));