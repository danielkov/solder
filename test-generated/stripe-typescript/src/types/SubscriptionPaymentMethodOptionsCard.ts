import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceMandateOptionsCard } from './InvoiceMandateOptionsCard';
import { InvoiceMandateOptionsCardSchema } from './InvoiceMandateOptionsCard';
/**
 * subscription_payment_method_options_card
 *
 * 
 */
export interface SubscriptionPaymentMethodOptionsCard {
  /**
   * invoice_mandate_options_card
   *
   * 
   */
  mandateOptions?: InvoiceMandateOptionsCard;
  /**
   * Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.
   */
  network?: string;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: string;
}

export const SubscriptionPaymentMethodOptionsCardSchema: TypedSchema<SubscriptionPaymentMethodOptionsCard> = typed<SubscriptionPaymentMethodOptionsCard>(object({
  get mandateOptions() { return optional(InvoiceMandateOptionsCardSchema) },
  network: optional(string()),
  requestThreeDSecure: optional(string()),
}));