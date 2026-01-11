import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentLinksRequestHostedConfirmation } from './PostPaymentLinksRequestHostedConfirmation';
import { PostPaymentLinksRequestHostedConfirmationSchema } from './PostPaymentLinksRequestHostedConfirmation';
import type { PostPaymentLinksRequestRedirect } from './PostPaymentLinksRequestRedirect';
import { PostPaymentLinksRequestRedirectSchema } from './PostPaymentLinksRequestRedirect';
/**
 * after_completion_params
 *
 * Behavior after the purchase is complete.
 */
export interface PostPaymentLinksRequestAfterCompletion {
  /**
   * after_completion_confirmation_page_params
   */
  hostedConfirmation?: PostPaymentLinksRequestHostedConfirmation;
  /**
   * after_completion_redirect_params
   */
  redirect?: PostPaymentLinksRequestRedirect;
  type: string;
}

export const PostPaymentLinksRequestAfterCompletionSchema: TypedSchema<PostPaymentLinksRequestAfterCompletion> = typed<PostPaymentLinksRequestAfterCompletion>(object({
  get hostedConfirmation() { return optional(PostPaymentLinksRequestHostedConfirmationSchema) },
  get redirect() { return optional(PostPaymentLinksRequestRedirectSchema) },
  type: string(),
}));