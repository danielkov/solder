import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Time at which the Tax Registration becomes active. It can be either `now` to indicate the current time, or a future timestamp measured in seconds since the Unix epoch.
 */
export type PostTaxRegistrationsRequestActiveFrom = string | number;

export const PostTaxRegistrationsRequestActiveFromSchema: TypedSchema<PostTaxRegistrationsRequestActiveFrom> = typed<PostTaxRegistrationsRequestActiveFrom>(union(string(), number()));
