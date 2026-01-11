import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionTaxIDCollection
 *
 * 
 */
export interface PaymentPagesCheckoutSessionTaxIdCollection {
  /**
   * Indicates whether tax ID collection is enabled for the session
   */
  enabled: boolean;
  /**
   * Indicates whether a tax ID is required on the payment page
   */
  required: string;
}

export const PaymentPagesCheckoutSessionTaxIdCollectionSchema: TypedSchema<PaymentPagesCheckoutSessionTaxIdCollection> = typed<PaymentPagesCheckoutSessionTaxIdCollection>(object({
  enabled: boolean(),
  required: string(),
}));