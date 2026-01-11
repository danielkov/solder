import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestCanceledObject } from './PostIssuingDisputesRequestCanceledObject';
import { PostIssuingDisputesRequestCanceledObjectSchema } from './PostIssuingDisputesRequestCanceledObject';
export type PostIssuingDisputesRequestCanceled = PostIssuingDisputesRequestCanceledObject | string;

export const PostIssuingDisputesRequestCanceledSchema: TypedSchema<PostIssuingDisputesRequestCanceled> = typed<PostIssuingDisputesRequestCanceled>(union(PostIssuingDisputesRequestCanceledObjectSchema, string()));