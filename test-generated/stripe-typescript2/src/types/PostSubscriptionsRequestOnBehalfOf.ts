import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The account on behalf of which to charge, for each of the subscription's invoices.
 */
export type PostSubscriptionsRequestOnBehalfOf = string | string;

export const PostSubscriptionsRequestOnBehalfOfSchema: TypedSchema<PostSubscriptionsRequestOnBehalfOf> = typed<PostSubscriptionsRequestOnBehalfOf>(union(string(), string()));
