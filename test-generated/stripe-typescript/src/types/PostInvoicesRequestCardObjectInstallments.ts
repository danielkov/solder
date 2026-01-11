import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesRequestCardObjectPlan } from './PostInvoicesRequestCardObjectPlan';
import { PostInvoicesRequestCardObjectPlanSchema } from './PostInvoicesRequestCardObjectPlan';
/**
 * installments_param
 */
export interface PostInvoicesRequestCardObjectInstallments {
  enabled?: boolean;
  plan?: PostInvoicesRequestCardObjectPlan;
}

export const PostInvoicesRequestCardObjectInstallmentsSchema: TypedSchema<PostInvoicesRequestCardObjectInstallments> = typed<PostInvoicesRequestCardObjectInstallments>(object({
  enabled: optional(boolean()),
  get plan() { return optional(PostInvoicesRequestCardObjectPlanSchema) },
}));