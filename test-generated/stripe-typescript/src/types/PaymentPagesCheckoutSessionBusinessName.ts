import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionBusinessName
 *
 * 
 */
export interface PaymentPagesCheckoutSessionBusinessName {
  /**
   * Indicates whether business name collection is enabled for the session
   */
  enabled: boolean;
  /**
   * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
   */
  optional: boolean;
}

export const PaymentPagesCheckoutSessionBusinessNameSchema: TypedSchema<PaymentPagesCheckoutSessionBusinessName> = typed<PaymentPagesCheckoutSessionBusinessName>(object({
  enabled: boolean(),
  optional: boolean(),
}));