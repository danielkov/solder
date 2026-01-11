import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * defaults_param
 *
 * Default configuration to be used on Stripe Tax calculations.
 */
export interface PostTaxSettingsRequestDefaults {
  taxBehavior?: string;
  taxCode?: string;
}

export const PostTaxSettingsRequestDefaultsSchema: TypedSchema<PostTaxSettingsRequestDefaults> = typed<PostTaxSettingsRequestDefaults>(object({
  taxBehavior: optional(string()),
  taxCode: optional(string()),
}));