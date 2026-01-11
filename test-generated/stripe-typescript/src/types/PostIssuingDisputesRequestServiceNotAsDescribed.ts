import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestServiceNotAsDescribedObject } from './PostIssuingDisputesRequestServiceNotAsDescribedObject';
import { PostIssuingDisputesRequestServiceNotAsDescribedObjectSchema } from './PostIssuingDisputesRequestServiceNotAsDescribedObject';
export type PostIssuingDisputesRequestServiceNotAsDescribed = PostIssuingDisputesRequestServiceNotAsDescribedObject | string;

export const PostIssuingDisputesRequestServiceNotAsDescribedSchema: TypedSchema<PostIssuingDisputesRequestServiceNotAsDescribed> = typed<PostIssuingDisputesRequestServiceNotAsDescribed>(union(PostIssuingDisputesRequestServiceNotAsDescribedObjectSchema, string()));