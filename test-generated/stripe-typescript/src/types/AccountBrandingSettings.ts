import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IconOrRef } from './IconOrRef';
import { IconOrRefSchema } from './IconOrRef';
import type { LogoOrRef } from './LogoOrRef';
import { LogoOrRefSchema } from './LogoOrRef';
/**
 * AccountBrandingSettings
 *
 * 
 */
export interface AccountBrandingSettings {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
   */
  icon?: IconOrRef;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
   */
  logo?: LogoOrRef;
  /**
   * A CSS hex color value representing the primary branding color for this account
   */
  primaryColor?: string;
  /**
   * A CSS hex color value representing the secondary branding color for this account
   */
  secondaryColor?: string;
}

export const AccountBrandingSettingsSchema: TypedSchema<AccountBrandingSettings> = typed<AccountBrandingSettings>(object({
  get icon() { return optional(IconOrRefSchema) },
  get logo() { return optional(LogoOrRefSchema) },
  primaryColor: optional(string()),
  secondaryColor: optional(string()),
}));