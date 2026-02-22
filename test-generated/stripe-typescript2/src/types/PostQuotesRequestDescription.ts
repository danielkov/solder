import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
 */
export type PostQuotesRequestDescription = string | string;

export const PostQuotesRequestDescriptionSchema: TypedSchema<PostQuotesRequestDescription> = typed<PostQuotesRequestDescription>(union(string(), string()));
