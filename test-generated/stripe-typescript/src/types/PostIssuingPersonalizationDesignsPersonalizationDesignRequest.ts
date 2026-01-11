import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo';
import { PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogoSchema } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo';
import type { PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText';
import { PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextSchema } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText';
import type { PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey';
import { PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKeySchema } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey';
import type { PostIssuingPersonalizationDesignsPersonalizationDesignRequestName } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestName';
import { PostIssuingPersonalizationDesignsPersonalizationDesignRequestNameSchema } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestName';
import type { PostIssuingPersonalizationDesignsRequestPreferences } from './PostIssuingPersonalizationDesignsRequestPreferences';
import { PostIssuingPersonalizationDesignsRequestPreferencesSchema } from './PostIssuingPersonalizationDesignsRequestPreferences';
export interface PostIssuingPersonalizationDesignsPersonalizationDesignRequest {
  /**
   * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
   */
  cardLogo?: PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo;
  /**
   * Hash containing carrier text, for use with physical bundles that support carrier text.
   */
  carrierText?: PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * Friendly display name. Providing an empty string will set the field to null.
   */
  name?: PostIssuingPersonalizationDesignsPersonalizationDesignRequestName;
  /**
   * The physical bundle object belonging to this personalization design.
   */
  physicalBundle?: string;
  /**
   * preferences_param
   *
   * Information on whether this personalization design is used to create cards when one is not specified.
   */
  preferences?: PostIssuingPersonalizationDesignsRequestPreferences;
  /**
   * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
   */
  transferLookupKey?: boolean;
}

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequest> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequest>(object({
  get cardLogo() { return optional(PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogoSchema) },
  get carrierText() { return optional(PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextSchema) },
  expand: optional(array(string())),
  get lookupKey() { return optional(PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKeySchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get name() { return optional(PostIssuingPersonalizationDesignsPersonalizationDesignRequestNameSchema) },
  physicalBundle: optional(string()),
  get preferences() { return optional(PostIssuingPersonalizationDesignsRequestPreferencesSchema) },
  transferLookupKey: optional(boolean()),
}));