import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostIssuingPersonalizationDesignsRequestFooterBody = string | string;

export const PostIssuingPersonalizationDesignsRequestFooterBodySchema: TypedSchema<PostIssuingPersonalizationDesignsRequestFooterBody> = typed<PostIssuingPersonalizationDesignsRequestFooterBody>(union(string(), string()));
