import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceBusinessName
 *
 * 
 */
export interface PaymentLinksResourceBusinessName {
  /**
   * Indicates whether business name collection is enabled for the payment link.
   */
  enabled: boolean;
  /**
   * Whether the customer is required to complete the field before checking out. Defaults to `false`.
   */
  optional: boolean;
}

export const PaymentLinksResourceBusinessNameSchema: TypedSchema<PaymentLinksResourceBusinessName> = typed<PaymentLinksResourceBusinessName>(object({
  enabled: boolean(),
  optional: boolean(),
}));