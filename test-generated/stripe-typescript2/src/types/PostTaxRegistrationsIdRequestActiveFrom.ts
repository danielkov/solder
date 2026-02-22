import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Time at which the registration becomes active. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
 */
export type PostTaxRegistrationsIdRequestActiveFrom = string | number;

export const PostTaxRegistrationsIdRequestActiveFromSchema: TypedSchema<PostTaxRegistrationsIdRequestActiveFrom> = typed<PostTaxRegistrationsIdRequestActiveFrom>(union(string(), number()));
