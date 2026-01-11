import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostTransfersIdReversalsRequest {
  /**
   * A positive integer in cents (or local equivalent) representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.
   */
  amount?: number;
  /**
   * An arbitrary string which you can attach to a reversal object. This will be unset if you POST an empty value.
   */
  description?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.
   */
  refundApplicationFee?: boolean;
}

export const PostTransfersIdReversalsRequestSchema: TypedSchema<PostTransfersIdReversalsRequest> = typed<PostTransfersIdReversalsRequest>(object({
  amount: optional(number()),
  description: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  refundApplicationFee: optional(boolean()),
}));