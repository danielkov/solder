import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesRequestCardObject } from './PostInvoicesRequestCardObject';
import { PostInvoicesRequestCardObjectSchema } from './PostInvoicesRequestCardObject';
export type PostInvoicesRequestCard = PostInvoicesRequestCardObject | string;

export const PostInvoicesRequestCardSchema: TypedSchema<PostInvoicesRequestCard> = typed<PostInvoicesRequestCard>(union(PostInvoicesRequestCardObjectSchema, string()));