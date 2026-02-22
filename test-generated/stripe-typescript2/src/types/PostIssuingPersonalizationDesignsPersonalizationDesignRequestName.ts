import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Friendly display name. Providing an empty string will set the field to null.
 */
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestName = string | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestNameSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestName> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestName>(union(string(), string()));
