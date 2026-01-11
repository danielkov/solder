import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingCreditGrantsResourceMonetaryAmount
 *
 * 
 */
export interface BillingCreditGrantsResourceMonetaryAmount {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * A positive integer representing the amount.
   */
  value: number;
}

export const BillingCreditGrantsResourceMonetaryAmountSchema: TypedSchema<BillingCreditGrantsResourceMonetaryAmount> = typed<BillingCreditGrantsResourceMonetaryAmount>(object({
  currency: string(),
  value: number(),
}));