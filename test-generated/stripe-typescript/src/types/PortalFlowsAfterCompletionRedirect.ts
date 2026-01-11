import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalFlowsAfterCompletionRedirect
 *
 * 
 */
export interface PortalFlowsAfterCompletionRedirect {
  /**
   * The URL the customer will be redirected to after the flow is completed.
   */
  returnUrl: string;
}

export const PortalFlowsAfterCompletionRedirectSchema: TypedSchema<PortalFlowsAfterCompletionRedirect> = typed<PortalFlowsAfterCompletionRedirect>(object({
  returnUrl: string(),
}));