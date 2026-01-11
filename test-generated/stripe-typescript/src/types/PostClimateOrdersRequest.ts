import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostClimateOrdersRequestBeneficiary } from './PostClimateOrdersRequestBeneficiary';
import { PostClimateOrdersRequestBeneficiarySchema } from './PostClimateOrdersRequestBeneficiary';
export interface PostClimateOrdersRequest {
  /**
   * Requested amount of carbon removal units. Either this or `metric_tons` must be specified.
   */
  amount?: number;
  /**
   * beneficiary_params
   *
   * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
   */
  beneficiary?: PostClimateOrdersRequestBeneficiary;
  /**
   * Request currency for the order as a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a supported [settlement currency for your account](https://stripe.com/docs/currencies). If omitted, the account's default currency will be used.
   */
  currency?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * Requested number of tons for the order. Either this or `amount` must be specified.
   */
  metricTons?: string;
  /**
   * Unique identifier of the Climate product.
   */
  product: string;
}

export const PostClimateOrdersRequestSchema: TypedSchema<PostClimateOrdersRequest> = typed<PostClimateOrdersRequest>(object({
  amount: optional(number()),
  get beneficiary() { return optional(PostClimateOrdersRequestBeneficiarySchema) },
  currency: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  metricTons: optional(string()),
  product: string(),
}));