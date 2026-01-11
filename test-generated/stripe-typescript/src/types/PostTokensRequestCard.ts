import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostTokensRequestCardObject } from './PostTokensRequestCardObject';
import { PostTokensRequestCardObjectSchema } from './PostTokensRequestCardObject';
export type PostTokensRequestCard = PostTokensRequestCardObject | string;

export const PostTokensRequestCardSchema: TypedSchema<PostTokensRequestCard> = typed<PostTokensRequestCard>(union(PostTokensRequestCardObjectSchema, string()));