import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostIssuingDisputesRequestCanceledObjectCancellationReason = string | string;

export const PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema: TypedSchema<PostIssuingDisputesRequestCanceledObjectCancellationReason> = typed<PostIssuingDisputesRequestCanceledObjectCancellationReason>(union(string(), string()));
