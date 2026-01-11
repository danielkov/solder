import { TypedSchema, boolean, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided = boolean | string;

export const PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvidedSchema: TypedSchema<PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided> = typed<PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided>(union(boolean(), string()));