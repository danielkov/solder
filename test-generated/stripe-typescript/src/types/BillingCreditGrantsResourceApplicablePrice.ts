import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingCreditGrantsResourceApplicablePrice
 *
 * 
 */
export interface BillingCreditGrantsResourceApplicablePrice {
  /**
   * Unique identifier for the object.
   */
  id?: string;
}

export const BillingCreditGrantsResourceApplicablePriceSchema: TypedSchema<BillingCreditGrantsResourceApplicablePrice> = typed<BillingCreditGrantsResourceApplicablePrice>(object({
  id: optional(string()),
}));