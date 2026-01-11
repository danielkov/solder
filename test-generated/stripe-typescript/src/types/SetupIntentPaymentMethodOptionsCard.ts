import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsCardMandateOptions } from './SetupIntentPaymentMethodOptionsCardMandateOptions';
import { SetupIntentPaymentMethodOptionsCardMandateOptionsSchema } from './SetupIntentPaymentMethodOptionsCardMandateOptions';
/**
 * setup_intent_payment_method_options_card
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsCard {
  /**
   * Configuration options for setting up an eMandate for cards issued in India.
   */
  mandateOptions?: SetupIntentPaymentMethodOptionsCardMandateOptions;
  /**
   * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
   */
  network?: string;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: string;
}

export const SetupIntentPaymentMethodOptionsCardSchema: TypedSchema<SetupIntentPaymentMethodOptionsCard> = typed<SetupIntentPaymentMethodOptionsCard>(object({
  get mandateOptions() { return optional(SetupIntentPaymentMethodOptionsCardMandateOptionsSchema) },
  network: optional(string()),
  requestThreeDSecure: optional(string()),
}));