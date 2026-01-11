import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionIndividualName
 *
 * 
 */
export interface PaymentPagesCheckoutSessionIndividualName {
  /**
   * Indicates whether individual name collection is enabled for the session
   */
  enabled: boolean;
  /**
   * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
   */
  optional: boolean;
}

export const PaymentPagesCheckoutSessionIndividualNameSchema: TypedSchema<PaymentPagesCheckoutSessionIndividualName> = typed<PaymentPagesCheckoutSessionIndividualName>(object({
  enabled: boolean(),
  optional: boolean(),
}));