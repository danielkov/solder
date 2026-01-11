import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalSessionsRequestHostedConfirmation } from './PostBillingPortalSessionsRequestHostedConfirmation';
import { PostBillingPortalSessionsRequestHostedConfirmationSchema } from './PostBillingPortalSessionsRequestHostedConfirmation';
import type { PostBillingPortalSessionsRequestRedirect } from './PostBillingPortalSessionsRequestRedirect';
import { PostBillingPortalSessionsRequestRedirectSchema } from './PostBillingPortalSessionsRequestRedirect';
/**
 * flow_data_after_completion_param
 */
export interface PostBillingPortalSessionsRequestAfterCompletion {
  /**
   * after_completion_hosted_confirmation_param
   */
  hostedConfirmation?: PostBillingPortalSessionsRequestHostedConfirmation;
  /**
   * after_completion_redirect_param
   */
  redirect?: PostBillingPortalSessionsRequestRedirect;
  type: string;
}

export const PostBillingPortalSessionsRequestAfterCompletionSchema: TypedSchema<PostBillingPortalSessionsRequestAfterCompletion> = typed<PostBillingPortalSessionsRequestAfterCompletion>(object({
  get hostedConfirmation() { return optional(PostBillingPortalSessionsRequestHostedConfirmationSchema) },
  get redirect() { return optional(PostBillingPortalSessionsRequestRedirectSchema) },
  type: string(),
}));