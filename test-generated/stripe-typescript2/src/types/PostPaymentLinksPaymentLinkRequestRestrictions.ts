import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentLinksPaymentLinkRequestRestrictionsObject } from './PostPaymentLinksPaymentLinkRequestRestrictionsObject';
import { PostPaymentLinksPaymentLinkRequestRestrictionsObjectSchema } from './PostPaymentLinksPaymentLinkRequestRestrictionsObject';
/**
 * Settings that restrict the usage of a payment link.
 */
export type PostPaymentLinksPaymentLinkRequestRestrictions = PostPaymentLinksPaymentLinkRequestRestrictionsObject | string;

export const PostPaymentLinksPaymentLinkRequestRestrictionsSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestRestrictions> = typed<PostPaymentLinksPaymentLinkRequestRestrictions>(union(PostPaymentLinksPaymentLinkRequestRestrictionsObjectSchema, string()));
