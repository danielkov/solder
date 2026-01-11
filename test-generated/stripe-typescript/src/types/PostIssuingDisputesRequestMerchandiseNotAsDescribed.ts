import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestMerchandiseNotAsDescribedObject } from './PostIssuingDisputesRequestMerchandiseNotAsDescribedObject';
import { PostIssuingDisputesRequestMerchandiseNotAsDescribedObjectSchema } from './PostIssuingDisputesRequestMerchandiseNotAsDescribedObject';
export type PostIssuingDisputesRequestMerchandiseNotAsDescribed = PostIssuingDisputesRequestMerchandiseNotAsDescribedObject | string;

export const PostIssuingDisputesRequestMerchandiseNotAsDescribedSchema: TypedSchema<PostIssuingDisputesRequestMerchandiseNotAsDescribed> = typed<PostIssuingDisputesRequestMerchandiseNotAsDescribed>(union(PostIssuingDisputesRequestMerchandiseNotAsDescribedObjectSchema, string()));