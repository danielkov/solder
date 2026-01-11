import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersCustomersCustomerFundCashBalanceRequest {
  /**
   * Amount to be used for this test cash balance transaction. A positive integer representing how much to fund in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to fund $1.00 or 100 to fund ¥100, a zero-decimal currency).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A description of the test funding. This simulates free-text references supplied by customers when making bank transfers to their cash balance. You can use this to test how Stripe's [reconciliation algorithm](https://stripe.com/docs/payments/customer-balance/reconciliation) applies to different user inputs.
   */
  reference?: string;
}

export const PostTestHelpersCustomersCustomerFundCashBalanceRequestSchema: TypedSchema<PostTestHelpersCustomersCustomerFundCashBalanceRequest> = typed<PostTestHelpersCustomersCustomerFundCashBalanceRequest>(object({
  amount: number(),
  currency: string(),
  expand: optional(array(string())),
  reference: optional(string()),
}));