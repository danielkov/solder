import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceTaxIdCollection
 *
 * 
 */
export interface PaymentLinksResourceTaxIdCollection {
  /**
   * Indicates whether tax ID collection is enabled for the session.
   */
  enabled: boolean;
  required: string;
}

export const PaymentLinksResourceTaxIdCollectionSchema: TypedSchema<PaymentLinksResourceTaxIdCollection> = typed<PaymentLinksResourceTaxIdCollection>(object({
  enabled: boolean(),
  required: string(),
}));