import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * IssuingPersonalizationDesignPreferences
 *
 * 
 */
export interface IssuingPersonalizationDesignPreferences {
  /**
   * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
   */
  isDefault: boolean;
  /**
   * Whether this personalization design is used to create cards when one is not specified and a default for this connected account does not exist.
   */
  isPlatformDefault?: boolean;
}

export const IssuingPersonalizationDesignPreferencesSchema: TypedSchema<IssuingPersonalizationDesignPreferences> = typed<IssuingPersonalizationDesignPreferences>(object({
  isDefault: boolean(),
  isPlatformDefault: optional(boolean()),
}));