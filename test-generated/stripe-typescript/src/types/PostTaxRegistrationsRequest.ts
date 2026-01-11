import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsRequestActiveFrom } from './PostTaxRegistrationsRequestActiveFrom';
import { PostTaxRegistrationsRequestActiveFromSchema } from './PostTaxRegistrationsRequestActiveFrom';
import type { PostTaxRegistrationsRequestCountryOptions } from './PostTaxRegistrationsRequestCountryOptions';
import { PostTaxRegistrationsRequestCountryOptionsSchema } from './PostTaxRegistrationsRequestCountryOptions';
export interface PostTaxRegistrationsRequest {
  /**
   * Time at which the Tax Registration becomes active. It can be either `now` to indicate the current time, or a future timestamp measured in seconds since the Unix epoch.
   */
  activeFrom: PostTaxRegistrationsRequestActiveFrom;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * country_options
   *
   * Specific options for a registration in the specified `country`.
   */
  countryOptions: PostTaxRegistrationsRequestCountryOptions;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * If set, the Tax Registration stops being active at this time. If not set, the Tax Registration will be active indefinitely. Timestamp measured in seconds since the Unix epoch.
   */
  expiresAt?: number;
}

export const PostTaxRegistrationsRequestSchema: TypedSchema<PostTaxRegistrationsRequest> = typed<PostTaxRegistrationsRequest>(object({
  activeFrom: PostTaxRegistrationsRequestActiveFromSchema,
  country: string(),
  countryOptions: PostTaxRegistrationsRequestCountryOptionsSchema,
  expand: optional(array(string())),
  expiresAt: optional(number()),
}));