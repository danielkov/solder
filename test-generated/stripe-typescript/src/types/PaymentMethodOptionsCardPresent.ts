import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodOptionsCardPresentRouting } from './PaymentMethodOptionsCardPresentRouting';
import { PaymentMethodOptionsCardPresentRoutingSchema } from './PaymentMethodOptionsCardPresentRouting';
/**
 * payment_method_options_card_present
 *
 * 
 */
export interface PaymentMethodOptionsCardPresent {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
   */
  requestExtendedAuthorization?: boolean;
  /**
   * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
   */
  requestIncrementalAuthorizationSupport?: boolean;
  /**
   * payment_method_options_card_present_routing
   *
   * 
   */
  routing?: PaymentMethodOptionsCardPresentRouting;
}

export const PaymentMethodOptionsCardPresentSchema: TypedSchema<PaymentMethodOptionsCardPresent> = typed<PaymentMethodOptionsCardPresent>(object({
  captureMethod: optional(string()),
  requestExtendedAuthorization: optional(boolean()),
  requestIncrementalAuthorizationSupport: optional(boolean()),
  get routing() { return optional(PaymentMethodOptionsCardPresentRoutingSchema) },
}));