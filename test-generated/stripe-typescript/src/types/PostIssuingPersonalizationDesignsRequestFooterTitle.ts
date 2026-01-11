import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingPersonalizationDesignsRequestFooterTitle = string | string;

export const PostIssuingPersonalizationDesignsRequestFooterTitleSchema: TypedSchema<PostIssuingPersonalizationDesignsRequestFooterTitle> = typed<PostIssuingPersonalizationDesignsRequestFooterTitle>(union(string(), string()));