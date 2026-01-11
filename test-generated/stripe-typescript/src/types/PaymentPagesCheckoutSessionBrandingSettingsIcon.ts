import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionBrandingSettingsIcon
 *
 * 
 */
export interface PaymentPagesCheckoutSessionBrandingSettingsIcon {
  /**
   * The ID of a [File upload](https://stripe.com/docs/api/files) representing the icon. Purpose must be `business_icon`. Required if `type` is `file` and disallowed otherwise.
   */
  file?: string;
  /**
   * The type of image for the icon. Must be one of `file` or `url`.
   */
  type: string;
  /**
   * The URL of the image. Present when `type` is `url`.
   */
  url?: string;
}

export const PaymentPagesCheckoutSessionBrandingSettingsIconSchema: TypedSchema<PaymentPagesCheckoutSessionBrandingSettingsIcon> = typed<PaymentPagesCheckoutSessionBrandingSettingsIcon>(object({
  file: optional(string()),
  type: string(),
  url: optional(string()),
}));