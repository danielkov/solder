import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostCheckoutSessionsRequestIcon } from './PostCheckoutSessionsRequestIcon';
import { PostCheckoutSessionsRequestIconSchema } from './PostCheckoutSessionsRequestIcon';
import type { PostCheckoutSessionsRequestLogo } from './PostCheckoutSessionsRequestLogo';
import { PostCheckoutSessionsRequestLogoSchema } from './PostCheckoutSessionsRequestLogo';
/**
 * branding_settings_params
 *
 * The branding settings for the Checkout Session. This parameter is not allowed if ui_mode is `custom`.
 */
export interface PostCheckoutSessionsRequestBrandingSettings {
  backgroundColor?: PostAccountsRequestPaymentsPricing;
  borderStyle?: string;
  buttonColor?: PostAccountsRequestPaymentsPricing;
  displayName?: string;
  fontFamily?: string;
  /**
   * icon_params
   */
  icon?: PostCheckoutSessionsRequestIcon;
  /**
   * logo_params
   */
  logo?: PostCheckoutSessionsRequestLogo;
}

export const PostCheckoutSessionsRequestBrandingSettingsSchema: TypedSchema<PostCheckoutSessionsRequestBrandingSettings> = typed<PostCheckoutSessionsRequestBrandingSettings>(object({
  get backgroundColor() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  borderStyle: optional(string()),
  get buttonColor() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  displayName: optional(string()),
  fontFamily: optional(string()),
  get icon() { return optional(PostCheckoutSessionsRequestIconSchema) },
  get logo() { return optional(PostCheckoutSessionsRequestLogoSchema) },
}));