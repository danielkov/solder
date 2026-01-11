import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesCreatePreviewRequestTrialEnd = string | number;

export const PostInvoicesCreatePreviewRequestTrialEndSchema: TypedSchema<PostInvoicesCreatePreviewRequestTrialEnd> = typed<PostInvoicesCreatePreviewRequestTrialEnd>(union(string(), number()));