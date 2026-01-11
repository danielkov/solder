import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostTaxRatesTaxRateRequest {
  /**
   * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
   */
  active?: boolean;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;
  /**
   * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
   */
  description?: string;
  /**
   * The display name of the tax rate, which will be shown to users.
   */
  displayName?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
   */
  jurisdiction?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
   */
  state?: string;
  /**
   * The high-level tax type, such as `vat` or `sales_tax`.
   */
  taxType?: string;
}

export const PostTaxRatesTaxRateRequestSchema: TypedSchema<PostTaxRatesTaxRateRequest> = typed<PostTaxRatesTaxRateRequest>(object({
  active: optional(boolean()),
  country: optional(string()),
  description: optional(string()),
  displayName: optional(string()),
  expand: optional(array(string())),
  jurisdiction: optional(string()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  state: optional(string()),
  taxType: optional(string()),
}));