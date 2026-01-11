import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestFraudulentObject } from './PostIssuingDisputesRequestFraudulentObject';
import { PostIssuingDisputesRequestFraudulentObjectSchema } from './PostIssuingDisputesRequestFraudulentObject';
export type PostIssuingDisputesRequestFraudulent = PostIssuingDisputesRequestFraudulentObject | string;

export const PostIssuingDisputesRequestFraudulentSchema: TypedSchema<PostIssuingDisputesRequestFraudulent> = typed<PostIssuingDisputesRequestFraudulent>(union(PostIssuingDisputesRequestFraudulentObjectSchema, string()));