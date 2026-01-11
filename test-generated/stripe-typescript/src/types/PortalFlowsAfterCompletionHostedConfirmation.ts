import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalFlowsAfterCompletionHostedConfirmation
 *
 * 
 */
export interface PortalFlowsAfterCompletionHostedConfirmation {
  /**
   * A custom message to display to the customer after the flow is completed.
   */
  customMessage?: string;
}

export const PortalFlowsAfterCompletionHostedConfirmationSchema: TypedSchema<PortalFlowsAfterCompletionHostedConfirmation> = typed<PortalFlowsAfterCompletionHostedConfirmation>(object({
  customMessage: optional(string()),
}));