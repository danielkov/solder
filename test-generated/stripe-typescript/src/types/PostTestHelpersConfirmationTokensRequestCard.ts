import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersConfirmationTokensRequestInstallments } from './PostTestHelpersConfirmationTokensRequestInstallments';
import { PostTestHelpersConfirmationTokensRequestInstallmentsSchema } from './PostTestHelpersConfirmationTokensRequestInstallments';
/**
 * card_param
 */
export interface PostTestHelpersConfirmationTokensRequestCard {
  /**
   * installments_param
   */
  installments?: PostTestHelpersConfirmationTokensRequestInstallments;
}

export const PostTestHelpersConfirmationTokensRequestCardSchema: TypedSchema<PostTestHelpersConfirmationTokensRequestCard> = typed<PostTestHelpersConfirmationTokensRequestCard>(object({
  get installments() { return optional(PostTestHelpersConfirmationTokensRequestInstallmentsSchema) },
}));