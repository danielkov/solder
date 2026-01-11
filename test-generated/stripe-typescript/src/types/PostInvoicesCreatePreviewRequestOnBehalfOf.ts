import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesCreatePreviewRequestOnBehalfOf = string | string;

export const PostInvoicesCreatePreviewRequestOnBehalfOfSchema: TypedSchema<PostInvoicesCreatePreviewRequestOnBehalfOf> = typed<PostInvoicesCreatePreviewRequestOnBehalfOf>(union(string(), string()));