import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceIndividualName
 *
 * 
 */
export interface PaymentLinksResourceIndividualName {
  /**
   * Indicates whether individual name collection is enabled for the payment link.
   */
  enabled: boolean;
  /**
   * Whether the customer is required to complete the field before checking out. Defaults to `false`.
   */
  optional: boolean;
}

export const PaymentLinksResourceIndividualNameSchema: TypedSchema<PaymentLinksResourceIndividualName> = typed<PaymentLinksResourceIndividualName>(object({
  enabled: boolean(),
  optional: boolean(),
}));