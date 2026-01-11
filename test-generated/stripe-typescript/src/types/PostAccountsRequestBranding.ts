import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * branding_settings_specs
 */
export interface PostAccountsRequestBranding {
  icon?: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export const PostAccountsRequestBrandingSchema: TypedSchema<PostAccountsRequestBranding> = typed<PostAccountsRequestBranding>(object({
  icon: optional(string()),
  logo: optional(string()),
  primaryColor: optional(string()),
  secondaryColor: optional(string()),
}));