import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCompletionBehaviorRedirect
 *
 * 
 */
export interface PaymentLinksResourceCompletionBehaviorRedirect {
  /**
   * The URL the customer will be redirected to after the purchase is complete.
   */
  url: string;
}

export const PaymentLinksResourceCompletionBehaviorRedirectSchema: TypedSchema<PaymentLinksResourceCompletionBehaviorRedirect> = typed<PaymentLinksResourceCompletionBehaviorRedirect>(object({
  url: string(),
}));