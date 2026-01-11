import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingDisputesRequestCanceledObjectCancellationReason = string | string;

export const PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema: TypedSchema<PostIssuingDisputesRequestCanceledObjectCancellationReason> = typed<PostIssuingDisputesRequestCanceledObjectCancellationReason>(union(string(), string()));