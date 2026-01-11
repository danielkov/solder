import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo = string | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogoSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo>(union(string(), string()));