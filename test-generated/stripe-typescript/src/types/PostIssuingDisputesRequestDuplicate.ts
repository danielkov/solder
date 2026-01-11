import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestDuplicateObject } from './PostIssuingDisputesRequestDuplicateObject';
import { PostIssuingDisputesRequestDuplicateObjectSchema } from './PostIssuingDisputesRequestDuplicateObject';
export type PostIssuingDisputesRequestDuplicate = PostIssuingDisputesRequestDuplicateObject | string;

export const PostIssuingDisputesRequestDuplicateSchema: TypedSchema<PostIssuingDisputesRequestDuplicate> = typed<PostIssuingDisputesRequestDuplicate>(union(PostIssuingDisputesRequestDuplicateObjectSchema, string()));