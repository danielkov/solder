import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesCreatePreviewRequestCancelAt = number | string | string;

export const PostInvoicesCreatePreviewRequestCancelAtSchema: TypedSchema<PostInvoicesCreatePreviewRequestCancelAt> = typed<PostInvoicesCreatePreviewRequestCancelAt>(union(number(), string(), string()));