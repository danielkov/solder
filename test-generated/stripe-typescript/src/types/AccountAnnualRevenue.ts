import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountAnnualRevenue
 *
 * 
 */
export interface AccountAnnualRevenue {
  /**
   * A non-negative integer representing the amount in the [smallest currency unit](/currencies#zero-decimal).
   */
  amount?: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
   */
  fiscalYearEnd?: string;
}

export const AccountAnnualRevenueSchema: TypedSchema<AccountAnnualRevenue> = typed<AccountAnnualRevenue>(object({
  amount: optional(number()),
  currency: optional(string()),
  fiscalYearEnd: optional(string()),
}));