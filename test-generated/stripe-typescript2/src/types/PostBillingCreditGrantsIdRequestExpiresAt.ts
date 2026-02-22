import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The time when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire.
 */
export type PostBillingCreditGrantsIdRequestExpiresAt = number | string;

export const PostBillingCreditGrantsIdRequestExpiresAtSchema: TypedSchema<PostBillingCreditGrantsIdRequestExpiresAt> = typed<PostBillingCreditGrantsIdRequestExpiresAt>(union(number(), string()));
