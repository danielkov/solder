import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
 */
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey = string | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKeySchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey>(union(string(), string()));
