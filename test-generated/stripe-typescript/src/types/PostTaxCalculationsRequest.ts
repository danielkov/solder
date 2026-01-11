import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxCalculationsRequestCustomerDetails } from './PostTaxCalculationsRequestCustomerDetails';
import { PostTaxCalculationsRequestCustomerDetailsSchema } from './PostTaxCalculationsRequestCustomerDetails';
import type { PostTaxCalculationsRequestLineItemsItem } from './PostTaxCalculationsRequestLineItemsItem';
import { PostTaxCalculationsRequestLineItemsItemSchema } from './PostTaxCalculationsRequestLineItemsItem';
import type { PostTaxCalculationsRequestShipFromDetails } from './PostTaxCalculationsRequestShipFromDetails';
import { PostTaxCalculationsRequestShipFromDetailsSchema } from './PostTaxCalculationsRequestShipFromDetails';
import type { PostTaxCalculationsRequestShippingCost } from './PostTaxCalculationsRequestShippingCost';
import { PostTaxCalculationsRequestShippingCostSchema } from './PostTaxCalculationsRequestShippingCost';
export interface PostTaxCalculationsRequest {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of an existing customer to use for this calculation. If provided, the customer's address and tax IDs are copied to `customer_details`.
   */
  customer?: string;
  /**
   * customer_details
   *
   * Details about the customer, including address and tax IDs.
   */
  customerDetails?: PostTaxCalculationsRequestCustomerDetails;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A list of items the customer is purchasing.
   */
  lineItems: Array<PostTaxCalculationsRequestLineItemsItem>;
  /**
   * ship_from_details
   *
   * Details about the address from which the goods are being shipped.
   */
  shipFromDetails?: PostTaxCalculationsRequestShipFromDetails;
  /**
   * shipping_cost
   *
   * Shipping cost details to be used for the calculation.
   */
  shippingCost?: PostTaxCalculationsRequestShippingCost;
  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation. Measured in seconds since the Unix epoch. Can be up to 48 hours in the past, and up to 48 hours in the future.
   */
  taxDate?: number;
}

export const PostTaxCalculationsRequestSchema: TypedSchema<PostTaxCalculationsRequest> = typed<PostTaxCalculationsRequest>(object({
  currency: string(),
  customer: optional(string()),
  get customerDetails() { return optional(PostTaxCalculationsRequestCustomerDetailsSchema) },
  expand: optional(array(string())),
  lineItems: array(PostTaxCalculationsRequestLineItemsItemSchema),
  get shipFromDetails() { return optional(PostTaxCalculationsRequestShipFromDetailsSchema) },
  get shippingCost() { return optional(PostTaxCalculationsRequestShippingCostSchema) },
  taxDate: optional(number()),
}));