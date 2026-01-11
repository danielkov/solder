import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCompletionBehaviorConfirmationPage
 *
 * 
 */
export interface PaymentLinksResourceCompletionBehaviorConfirmationPage {
  /**
   * The custom message that is displayed to the customer after the purchase is complete.
   */
  customMessage?: string;
}

export const PaymentLinksResourceCompletionBehaviorConfirmationPageSchema: TypedSchema<PaymentLinksResourceCompletionBehaviorConfirmationPage> = typed<PaymentLinksResourceCompletionBehaviorConfirmationPage>(object({
  customMessage: optional(string()),
}));