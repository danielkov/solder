import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConfirmationTokensResourceMandateData } from './ConfirmationTokensResourceMandateData';
import { ConfirmationTokensResourceMandateDataSchema } from './ConfirmationTokensResourceMandateData';
import type { ConfirmationTokensResourcePaymentMethodOptions } from './ConfirmationTokensResourcePaymentMethodOptions';
import { ConfirmationTokensResourcePaymentMethodOptionsSchema } from './ConfirmationTokensResourcePaymentMethodOptions';
import type { ConfirmationTokensResourcePaymentMethodPreview } from './ConfirmationTokensResourcePaymentMethodPreview';
import { ConfirmationTokensResourcePaymentMethodPreviewSchema } from './ConfirmationTokensResourcePaymentMethodPreview';
import type { ConfirmationTokensResourceShipping } from './ConfirmationTokensResourceShipping';
import { ConfirmationTokensResourceShippingSchema } from './ConfirmationTokensResourceShipping';
/**
 * ConfirmationTokensResourceConfirmationToken
 *
 * ConfirmationTokens help transport client side data collected by Stripe JS over
to your server for confirming a PaymentIntent or SetupIntent. If the confirmation
is successful, values present on the ConfirmationToken are written onto the Intent.

To learn more about how to use ConfirmationToken, visit the related guides:
- [Finalize payments on the server](https://stripe.com/docs/payments/finalize-payments-on-the-server)
- [Build two-step confirmation](https://stripe.com/docs/payments/build-a-two-step-confirmation).
 */
export interface ConfirmationToken {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent.
   */
  expiresAt?: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Data used for generating a Mandate.
   */
  mandateData?: ConfirmationTokensResourceMandateData;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  paymentIntent?: string;
  /**
   * Payment-method-specific configuration for this ConfirmationToken.
   */
  paymentMethodOptions?: ConfirmationTokensResourcePaymentMethodOptions;
  /**
   * Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken.
   */
  paymentMethodPreview?: ConfirmationTokensResourcePaymentMethodPreview;
  /**
   * Return URL used to confirm the Intent.
   */
  returnUrl?: string;
  /**
   * Indicates that you intend to make future payments with this ConfirmationToken's payment method.

The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
   */
  setupFutureUsage?: string;
  /**
   * ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  setupIntent?: string;
  /**
   * Shipping information collected on this ConfirmationToken.
   */
  shipping?: ConfirmationTokensResourceShipping;
  /**
   * Indicates whether the Stripe SDK is used to handle confirmation flow. Defaults to `true` on ConfirmationToken.
   */
  useStripeSdk: boolean;
}

export const ConfirmationTokenSchema: TypedSchema<ConfirmationToken> = typed<ConfirmationToken>(object({
  created: number(),
  expiresAt: optional(number()),
  id: string(),
  livemode: boolean(),
  get mandateData() { return optional(ConfirmationTokensResourceMandateDataSchema) },
  object: string(),
  paymentIntent: optional(string()),
  get paymentMethodOptions() { return optional(ConfirmationTokensResourcePaymentMethodOptionsSchema) },
  get paymentMethodPreview() { return optional(ConfirmationTokensResourcePaymentMethodPreviewSchema) },
  returnUrl: optional(string()),
  setupFutureUsage: optional(string()),
  setupIntent: optional(string()),
  get shipping() { return optional(ConfirmationTokensResourceShippingSchema) },
  useStripeSdk: boolean(),
}));