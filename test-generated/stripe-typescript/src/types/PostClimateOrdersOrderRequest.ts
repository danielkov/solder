import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostClimateOrdersOrderRequestBeneficiary } from './PostClimateOrdersOrderRequestBeneficiary';
import { PostClimateOrdersOrderRequestBeneficiarySchema } from './PostClimateOrdersOrderRequestBeneficiary';
export interface PostClimateOrdersOrderRequest {
  /**
   * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
   */
  beneficiary?: PostClimateOrdersOrderRequestBeneficiary;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
}

export const PostClimateOrdersOrderRequestSchema: TypedSchema<PostClimateOrdersOrderRequest> = typed<PostClimateOrdersOrderRequest>(object({
  get beneficiary() { return optional(PostClimateOrdersOrderRequestBeneficiarySchema) },
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
}));