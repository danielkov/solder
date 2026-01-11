import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * duration_params
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemDuration {
  interval: string;
  intervalCount?: number;
}

export const PostInvoicesCreatePreviewRequestPhasesItemDurationSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemDuration> = typed<PostInvoicesCreatePreviewRequestPhasesItemDuration>(object({
  interval: string(),
  intervalCount: optional(number()),
}));