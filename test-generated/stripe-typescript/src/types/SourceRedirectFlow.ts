import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceRedirectFlow
 *
 * 
 */
export interface SourceRedirectFlow {
  /**
   * The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`.
   */
  failureReason?: string;
  /**
   * The URL you provide to redirect the customer to after they authenticated their payment.
   */
  returnUrl: string;
  /**
   * The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (successful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused).
   */
  status: string;
  /**
   * The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.
   */
  url: string;
}

export const SourceRedirectFlowSchema: TypedSchema<SourceRedirectFlow> = typed<SourceRedirectFlow>(object({
  failureReason: optional(string()),
  returnUrl: string(),
  status: string(),
  url: string(),
}));