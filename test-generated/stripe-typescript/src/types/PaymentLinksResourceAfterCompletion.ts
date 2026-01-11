import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceCompletionBehaviorConfirmationPage } from './PaymentLinksResourceCompletionBehaviorConfirmationPage';
import { PaymentLinksResourceCompletionBehaviorConfirmationPageSchema } from './PaymentLinksResourceCompletionBehaviorConfirmationPage';
import type { PaymentLinksResourceCompletionBehaviorRedirect } from './PaymentLinksResourceCompletionBehaviorRedirect';
import { PaymentLinksResourceCompletionBehaviorRedirectSchema } from './PaymentLinksResourceCompletionBehaviorRedirect';
/**
 * PaymentLinksResourceAfterCompletion
 *
 * 
 */
export interface PaymentLinksResourceAfterCompletion {
  /**
   * PaymentLinksResourceCompletionBehaviorConfirmationPage
   *
   * 
   */
  hostedConfirmation?: PaymentLinksResourceCompletionBehaviorConfirmationPage;
  /**
   * PaymentLinksResourceCompletionBehaviorRedirect
   *
   * 
   */
  redirect?: PaymentLinksResourceCompletionBehaviorRedirect;
  /**
   * The specified behavior after the purchase is complete.
   */
  type: string;
}

export const PaymentLinksResourceAfterCompletionSchema: TypedSchema<PaymentLinksResourceAfterCompletion> = typed<PaymentLinksResourceAfterCompletion>(object({
  get hostedConfirmation() { return optional(PaymentLinksResourceCompletionBehaviorConfirmationPageSchema) },
  get redirect() { return optional(PaymentLinksResourceCompletionBehaviorRedirectSchema) },
  type: string(),
}));