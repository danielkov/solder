import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesRequestCardObjectPlanObject } from './PostInvoicesRequestCardObjectPlanObject';
import { PostInvoicesRequestCardObjectPlanObjectSchema } from './PostInvoicesRequestCardObjectPlanObject';
export type PostInvoicesRequestCardObjectPlan = PostInvoicesRequestCardObjectPlanObject | string;

export const PostInvoicesRequestCardObjectPlanSchema: TypedSchema<PostInvoicesRequestCardObjectPlan> = typed<PostInvoicesRequestCardObjectPlan>(union(PostInvoicesRequestCardObjectPlanObjectSchema, string()));