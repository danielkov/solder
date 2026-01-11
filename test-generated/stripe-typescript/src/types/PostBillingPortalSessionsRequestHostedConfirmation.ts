import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * after_completion_hosted_confirmation_param
 */
export interface PostBillingPortalSessionsRequestHostedConfirmation {
  customMessage?: string;
}

export const PostBillingPortalSessionsRequestHostedConfirmationSchema: TypedSchema<PostBillingPortalSessionsRequestHostedConfirmation> = typed<PostBillingPortalSessionsRequestHostedConfirmation>(object({
  customMessage: optional(string()),
}));