import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingDisputesRequestCanceledObjectCanceledAt = number | string;

export const PostIssuingDisputesRequestCanceledObjectCanceledAtSchema: TypedSchema<PostIssuingDisputesRequestCanceledObjectCanceledAt> = typed<PostIssuingDisputesRequestCanceledObjectCanceledAt>(union(number(), string()));