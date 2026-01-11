import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsIdRequestActiveFrom } from './PostTaxRegistrationsIdRequestActiveFrom';
import { PostTaxRegistrationsIdRequestActiveFromSchema } from './PostTaxRegistrationsIdRequestActiveFrom';
import type { PostTaxRegistrationsIdRequestExpiresAt } from './PostTaxRegistrationsIdRequestExpiresAt';
import { PostTaxRegistrationsIdRequestExpiresAtSchema } from './PostTaxRegistrationsIdRequestExpiresAt';
export interface PostTaxRegistrationsIdRequest {
  /**
   * Time at which the registration becomes active. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
   */
  activeFrom?: PostTaxRegistrationsIdRequestActiveFrom;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
   */
  expiresAt?: PostTaxRegistrationsIdRequestExpiresAt;
}

export const PostTaxRegistrationsIdRequestSchema: TypedSchema<PostTaxRegistrationsIdRequest> = typed<PostTaxRegistrationsIdRequest>(object({
  get activeFrom() { return optional(PostTaxRegistrationsIdRequestActiveFromSchema) },
  expand: optional(array(string())),
  get expiresAt() { return optional(PostTaxRegistrationsIdRequestExpiresAtSchema) },
}));