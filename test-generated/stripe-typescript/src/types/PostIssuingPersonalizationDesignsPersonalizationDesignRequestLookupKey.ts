import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey = string | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKeySchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey>(union(string(), string()));