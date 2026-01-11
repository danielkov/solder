import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PortalFlowsAfterCompletionHostedConfirmation } from './PortalFlowsAfterCompletionHostedConfirmation';
import { PortalFlowsAfterCompletionHostedConfirmationSchema } from './PortalFlowsAfterCompletionHostedConfirmation';
import type { PortalFlowsAfterCompletionRedirect } from './PortalFlowsAfterCompletionRedirect';
import { PortalFlowsAfterCompletionRedirectSchema } from './PortalFlowsAfterCompletionRedirect';
/**
 * PortalFlowsFlowAfterCompletion
 *
 * 
 */
export interface PortalFlowsFlowAfterCompletion {
  /**
   * Configuration when `after_completion.type=hosted_confirmation`.
   */
  hostedConfirmation?: PortalFlowsAfterCompletionHostedConfirmation;
  /**
   * Configuration when `after_completion.type=redirect`.
   */
  redirect?: PortalFlowsAfterCompletionRedirect;
  /**
   * The specified type of behavior after the flow is completed.
   */
  type: string;
}

export const PortalFlowsFlowAfterCompletionSchema: TypedSchema<PortalFlowsFlowAfterCompletion> = typed<PortalFlowsFlowAfterCompletion>(object({
  get hostedConfirmation() { return optional(PortalFlowsAfterCompletionHostedConfirmationSchema) },
  get redirect() { return optional(PortalFlowsAfterCompletionRedirectSchema) },
  type: string(),
}));