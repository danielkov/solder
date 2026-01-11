import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions';
import type { PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions';
import type { PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions';
import type { PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions } from './PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions';
import { PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptionsSchema } from './PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions';
/**
 * PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions
 *
 * 
 */
export interface PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions {
  /**
   * PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions
   *
   * 
   */
  card?: PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions;
  /**
   * PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions
   *
   * 
   */
  cardPresent?: PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions;
  /**
   * PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions
   *
   * 
   */
  klarna?: PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions;
  /**
   * PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions
   *
   * 
   */
  paypal?: PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions;
}

export const PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptionsSchema: TypedSchema<PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions> = typed<PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions>(object({
  get card() { return optional(PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptionsSchema) },
  get cardPresent() { return optional(PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptionsSchema) },
  get klarna() { return optional(PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptionsSchema) },
  get paypal() { return optional(PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptionsSchema) },
}));