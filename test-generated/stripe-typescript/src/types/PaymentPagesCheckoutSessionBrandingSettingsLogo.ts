import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionBrandingSettingsLogo
 *
 * 
 */
export interface PaymentPagesCheckoutSessionBrandingSettingsLogo {
  /**
   * The ID of a [File upload](https://stripe.com/docs/api/files) representing the logo. Purpose must be `business_logo`. Required if `type` is `file` and disallowed otherwise.
   */
  file?: string;
  /**
   * The type of image for the logo. Must be one of `file` or `url`.
   */
  type: string;
  /**
   * The URL of the image. Present when `type` is `url`.
   */
  url?: string;
}

export const PaymentPagesCheckoutSessionBrandingSettingsLogoSchema: TypedSchema<PaymentPagesCheckoutSessionBrandingSettingsLogo> = typed<PaymentPagesCheckoutSessionBrandingSettingsLogo>(object({
  file: optional(string()),
  type: string(),
  url: optional(string()),
}));