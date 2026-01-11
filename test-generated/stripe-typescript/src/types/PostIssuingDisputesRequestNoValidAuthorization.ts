import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestNoValidAuthorizationObject } from './PostIssuingDisputesRequestNoValidAuthorizationObject';
import { PostIssuingDisputesRequestNoValidAuthorizationObjectSchema } from './PostIssuingDisputesRequestNoValidAuthorizationObject';
export type PostIssuingDisputesRequestNoValidAuthorization = PostIssuingDisputesRequestNoValidAuthorizationObject | string;

export const PostIssuingDisputesRequestNoValidAuthorizationSchema: TypedSchema<PostIssuingDisputesRequestNoValidAuthorization> = typed<PostIssuingDisputesRequestNoValidAuthorization>(union(PostIssuingDisputesRequestNoValidAuthorizationObjectSchema, string()));