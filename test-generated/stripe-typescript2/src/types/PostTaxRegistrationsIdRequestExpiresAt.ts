import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
 */
export type PostTaxRegistrationsIdRequestExpiresAt = string | number | string;

export const PostTaxRegistrationsIdRequestExpiresAtSchema: TypedSchema<PostTaxRegistrationsIdRequestExpiresAt> = typed<PostTaxRegistrationsIdRequestExpiresAt>(union(string(), number(), string()));
