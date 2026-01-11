import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestOtherObject } from './PostIssuingDisputesRequestOtherObject';
import { PostIssuingDisputesRequestOtherObjectSchema } from './PostIssuingDisputesRequestOtherObject';
export type PostIssuingDisputesRequestOther = PostIssuingDisputesRequestOtherObject | string;

export const PostIssuingDisputesRequestOtherSchema: TypedSchema<PostIssuingDisputesRequestOther> = typed<PostIssuingDisputesRequestOther>(union(PostIssuingDisputesRequestOtherObjectSchema, string()));