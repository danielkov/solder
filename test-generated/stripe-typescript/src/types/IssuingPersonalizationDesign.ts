import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CardLogoOrRef } from './CardLogoOrRef';
import { CardLogoOrRefSchema } from './CardLogoOrRef';
import type { IssuingPersonalizationDesignCarrierText } from './IssuingPersonalizationDesignCarrierText';
import { IssuingPersonalizationDesignCarrierTextSchema } from './IssuingPersonalizationDesignCarrierText';
import type { IssuingPersonalizationDesignPreferences } from './IssuingPersonalizationDesignPreferences';
import { IssuingPersonalizationDesignPreferencesSchema } from './IssuingPersonalizationDesignPreferences';
import type { IssuingPersonalizationDesignRejectionReasons } from './IssuingPersonalizationDesignRejectionReasons';
import { IssuingPersonalizationDesignRejectionReasonsSchema } from './IssuingPersonalizationDesignRejectionReasons';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PhysicalBundleOrRef } from './PhysicalBundleOrRef';
import { PhysicalBundleOrRefSchema } from './PhysicalBundleOrRef';
/**
 * IssuingPersonalizationDesign
 *
 * A Personalization Design is a logical grouping of a Physical Bundle, card logo, and carrier text that represents a product line.
 */
export interface IssuingPersonalizationDesign {
  /**
   * The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
   */
  cardLogo?: CardLogoOrRef;
  /**
   * Hash containing carrier text, for use with physical bundles that support carrier text.
   */
  carrierText?: IssuingPersonalizationDesignCarrierText;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * Friendly display name.
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The physical bundle object belonging to this personalization design.
   */
  physicalBundle: PhysicalBundleOrRef;
  /**
   * IssuingPersonalizationDesignPreferences
   *
   * 
   */
  preferences: IssuingPersonalizationDesignPreferences;
  /**
   * IssuingPersonalizationDesignRejectionReasons
   *
   * 
   */
  rejectionReasons: IssuingPersonalizationDesignRejectionReasons;
  /**
   * Whether this personalization design can be used to create cards.
   */
  status: string;
}

export const IssuingPersonalizationDesignSchema: TypedSchema<IssuingPersonalizationDesign> = typed<IssuingPersonalizationDesign>(object({
  get cardLogo() { return optional(CardLogoOrRefSchema) },
  get carrierText() { return optional(IssuingPersonalizationDesignCarrierTextSchema) },
  created: number(),
  id: string(),
  livemode: boolean(),
  lookupKey: optional(string()),
  metadata: MetadataPropertySchema,
  name: optional(string()),
  object: string(),
  physicalBundle: PhysicalBundleOrRefSchema,
  preferences: IssuingPersonalizationDesignPreferencesSchema,
  rejectionReasons: IssuingPersonalizationDesignRejectionReasonsSchema,
  status: string(),
}));