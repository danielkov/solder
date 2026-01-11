import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostChargesRequestCardObject } from './PostChargesRequestCardObject';
import { PostChargesRequestCardObjectSchema } from './PostChargesRequestCardObject';
export type PostChargesRequestCard = PostChargesRequestCardObject | string;

export const PostChargesRequestCardSchema: TypedSchema<PostChargesRequestCard> = typed<PostChargesRequestCard>(union(PostChargesRequestCardObjectSchema, string()));