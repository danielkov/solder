import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
 */
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo = string | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogoSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo>(union(string(), string()));
