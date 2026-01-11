import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesRequestCardObjectPlanObject } from './PostInvoicesRequestCardObjectPlanObject';
import { PostInvoicesRequestCardObjectPlanObjectSchema } from './PostInvoicesRequestCardObjectPlanObject';
/**
 * installments_param
 */
export interface PostTestHelpersConfirmationTokensRequestInstallments {
  /**
   * installment_plan
   */
  plan: PostInvoicesRequestCardObjectPlanObject;
}

export const PostTestHelpersConfirmationTokensRequestInstallmentsSchema: TypedSchema<PostTestHelpersConfirmationTokensRequestInstallments> = typed<PostTestHelpersConfirmationTokensRequestInstallments>(object({
  plan: PostInvoicesRequestCardObjectPlanObjectSchema,
}));