import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostShippingRatesRequestDeliveryEstimate } from './PostShippingRatesRequestDeliveryEstimate';
import { PostShippingRatesRequestDeliveryEstimateSchema } from './PostShippingRatesRequestDeliveryEstimate';
import type { PostShippingRatesRequestFixedAmount } from './PostShippingRatesRequestFixedAmount';
import { PostShippingRatesRequestFixedAmountSchema } from './PostShippingRatesRequestFixedAmount';
export interface PostShippingRatesRequest {
  /**
   * delivery_estimate
   *
   * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  deliveryEstimate?: PostShippingRatesRequestDeliveryEstimate;
  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * fixed_amount
   *
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixedAmount?: PostShippingRatesRequestFixedAmount;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: string;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  taxCode?: string;
  /**
   * The type of calculation to use on the shipping rate.
   */
  type?: string;
}

export const PostShippingRatesRequestSchema: TypedSchema<PostShippingRatesRequest> = typed<PostShippingRatesRequest>(object({
  get deliveryEstimate() { return optional(PostShippingRatesRequestDeliveryEstimateSchema) },
  displayName: string(),
  expand: optional(array(string())),
  get fixedAmount() { return optional(PostShippingRatesRequestFixedAmountSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  taxBehavior: optional(string()),
  taxCode: optional(string()),
  type: optional(string()),
}));