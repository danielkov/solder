import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * preferences_param
 *
 * Information on whether this personalization design is used to create cards when one is not specified.
 */
export interface PostIssuingPersonalizationDesignsRequestPreferences {
  isDefault: boolean;
}

export const PostIssuingPersonalizationDesignsRequestPreferencesSchema: TypedSchema<PostIssuingPersonalizationDesignsRequestPreferences> = typed<PostIssuingPersonalizationDesignsRequestPreferences>(object({
  isDefault: boolean(),
}));