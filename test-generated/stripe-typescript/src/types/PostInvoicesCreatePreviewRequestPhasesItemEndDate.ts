import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesCreatePreviewRequestPhasesItemEndDate = number | string;

export const PostInvoicesCreatePreviewRequestPhasesItemEndDateSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemEndDate> = typed<PostInvoicesCreatePreviewRequestPhasesItemEndDate>(union(number(), string()));