import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountMonthlyEstimatedRevenue
 *
 * 
 */
export interface AccountMonthlyEstimatedRevenue {
  /**
   * A non-negative integer representing how much to charge in the [smallest currency unit](/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
}

export const AccountMonthlyEstimatedRevenueSchema: TypedSchema<AccountMonthlyEstimatedRevenue> = typed<AccountMonthlyEstimatedRevenue>(object({
  amount: number(),
  currency: string(),
}));