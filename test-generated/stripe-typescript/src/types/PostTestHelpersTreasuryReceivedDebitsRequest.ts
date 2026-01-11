import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails } from './PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails';
import { PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetailsSchema } from './PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails';
export interface PostTestHelpersTreasuryReceivedDebitsRequest {
  /**
   * Amount (in cents) to be transferred.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The FinancialAccount to pull funds from.
   */
  financialAccount: string;
  /**
   * source_params
   *
   * Initiating payment method details for the object.
   */
  initiatingPaymentMethodDetails?: PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails;
  /**
   * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
   */
  network: string;
}

export const PostTestHelpersTreasuryReceivedDebitsRequestSchema: TypedSchema<PostTestHelpersTreasuryReceivedDebitsRequest> = typed<PostTestHelpersTreasuryReceivedDebitsRequest>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  expand: optional(array(string())),
  financialAccount: string(),
  get initiatingPaymentMethodDetails() { return optional(PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetailsSchema) },
  network: string(),
}));