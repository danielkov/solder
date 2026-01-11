import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestName = string | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestNameSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestName> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestName>(union(string(), string()));