import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestNotReceivedObject } from './PostIssuingDisputesRequestNotReceivedObject';
import { PostIssuingDisputesRequestNotReceivedObjectSchema } from './PostIssuingDisputesRequestNotReceivedObject';
export type PostIssuingDisputesRequestNotReceived = PostIssuingDisputesRequestNotReceivedObject | string;

export const PostIssuingDisputesRequestNotReceivedSchema: TypedSchema<PostIssuingDisputesRequestNotReceived> = typed<PostIssuingDisputesRequestNotReceived>(union(PostIssuingDisputesRequestNotReceivedObjectSchema, string()));