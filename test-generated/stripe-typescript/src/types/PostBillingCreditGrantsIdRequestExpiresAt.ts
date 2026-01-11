import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostBillingCreditGrantsIdRequestExpiresAt = number | string;

export const PostBillingCreditGrantsIdRequestExpiresAtSchema: TypedSchema<PostBillingCreditGrantsIdRequestExpiresAt> = typed<PostBillingCreditGrantsIdRequestExpiresAt>(union(number(), string()));