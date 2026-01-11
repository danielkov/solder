import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersIssuingSettlementsRequest {
  /**
   * The Bank Identification Number reflecting this settlement record.
   */
  bin: string;
  /**
   * The date that the transactions are cleared and posted to user's accounts.
   */
  clearingDate: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The total interchange received as reimbursement for the transactions.
   */
  interchangeFeesAmount?: number;
  /**
   * The total net amount required to settle with the network.
   */
  netTotalAmount: number;
  /**
   * The card network for this settlement. One of ["visa", "maestro"]
   */
  network?: string;
  /**
   * The Settlement Identification Number assigned by the network.
   */
  networkSettlementIdentifier?: string;
  /**
   * The total transaction amount reflected in this settlement.
   */
  transactionAmount?: number;
  /**
   * The total number of transactions reflected in this settlement.
   */
  transactionCount?: number;
}

export const PostTestHelpersIssuingSettlementsRequestSchema: TypedSchema<PostTestHelpersIssuingSettlementsRequest> = typed<PostTestHelpersIssuingSettlementsRequest>(object({
  bin: string(),
  clearingDate: number(),
  currency: string(),
  expand: optional(array(string())),
  interchangeFeesAmount: optional(number()),
  netTotalAmount: number(),
  network: optional(string()),
  networkSettlementIdentifier: optional(string()),
  transactionAmount: optional(number()),
  transactionCount: optional(number()),
}));