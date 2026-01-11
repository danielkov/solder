import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * display_preference_param
 */
export interface PostPaymentMethodConfigurationsRequestDisplayPreference {
  preference?: string;
}

export const PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema: TypedSchema<PostPaymentMethodConfigurationsRequestDisplayPreference> = typed<PostPaymentMethodConfigurationsRequestDisplayPreference>(object({
  preference: optional(string()),
}));