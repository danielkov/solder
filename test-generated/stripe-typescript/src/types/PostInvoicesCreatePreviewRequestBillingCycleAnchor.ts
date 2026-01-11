import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesCreatePreviewRequestBillingCycleAnchor = string | number;

export const PostInvoicesCreatePreviewRequestBillingCycleAnchorSchema: TypedSchema<PostInvoicesCreatePreviewRequestBillingCycleAnchor> = typed<PostInvoicesCreatePreviewRequestBillingCycleAnchor>(union(string(), number()));