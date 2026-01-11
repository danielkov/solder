import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersConfirmationTokensRequestCard } from './PostTestHelpersConfirmationTokensRequestCard';
import { PostTestHelpersConfirmationTokensRequestCardSchema } from './PostTestHelpersConfirmationTokensRequestCard';
/**
 * test_payment_method_options_param
 *
 * Payment-method-specific configuration for this ConfirmationToken.
 */
export interface PostTestHelpersConfirmationTokensRequestPaymentMethodOptions {
  /**
   * card_param
   */
  card?: PostTestHelpersConfirmationTokensRequestCard;
}

export const PostTestHelpersConfirmationTokensRequestPaymentMethodOptionsSchema: TypedSchema<PostTestHelpersConfirmationTokensRequestPaymentMethodOptions> = typed<PostTestHelpersConfirmationTokensRequestPaymentMethodOptions>(object({
  get card() { return optional(PostTestHelpersConfirmationTokensRequestCardSchema) },
}));