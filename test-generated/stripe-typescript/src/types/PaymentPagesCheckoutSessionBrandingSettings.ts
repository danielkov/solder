import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionBrandingSettingsIcon } from './PaymentPagesCheckoutSessionBrandingSettingsIcon';
import { PaymentPagesCheckoutSessionBrandingSettingsIconSchema } from './PaymentPagesCheckoutSessionBrandingSettingsIcon';
import type { PaymentPagesCheckoutSessionBrandingSettingsLogo } from './PaymentPagesCheckoutSessionBrandingSettingsLogo';
import { PaymentPagesCheckoutSessionBrandingSettingsLogoSchema } from './PaymentPagesCheckoutSessionBrandingSettingsLogo';
/**
 * PaymentPagesCheckoutSessionBrandingSettings
 *
 * 
 */
export interface PaymentPagesCheckoutSessionBrandingSettings {
  /**
   * A hex color value starting with `#` representing the background color for the Checkout Session.
   */
  backgroundColor: string;
  /**
   * The border style for the Checkout Session. Must be one of `rounded`, `rectangular`, or `pill`.
   */
  borderStyle: string;
  /**
   * A hex color value starting with `#` representing the button color for the Checkout Session.
   */
  buttonColor: string;
  /**
   * The display name shown on the Checkout Session.
   */
  displayName: string;
  /**
   * The font family for the Checkout Session. Must be one of the [supported font families](https://docs.stripe.com/payments/checkout/customization/appearance?payment-ui=stripe-hosted#font-compatibility).
   */
  fontFamily: string;
  /**
   * The icon for the Checkout Session. You cannot set both `logo` and `icon`.
   */
  icon?: PaymentPagesCheckoutSessionBrandingSettingsIcon;
  /**
   * The logo for the Checkout Session. You cannot set both `logo` and `icon`.
   */
  logo?: PaymentPagesCheckoutSessionBrandingSettingsLogo;
}

export const PaymentPagesCheckoutSessionBrandingSettingsSchema: TypedSchema<PaymentPagesCheckoutSessionBrandingSettings> = typed<PaymentPagesCheckoutSessionBrandingSettings>(object({
  backgroundColor: string(),
  borderStyle: string(),
  buttonColor: string(),
  displayName: string(),
  fontFamily: string(),
  get icon() { return optional(PaymentPagesCheckoutSessionBrandingSettingsIconSchema) },
  get logo() { return optional(PaymentPagesCheckoutSessionBrandingSettingsLogoSchema) },
}));