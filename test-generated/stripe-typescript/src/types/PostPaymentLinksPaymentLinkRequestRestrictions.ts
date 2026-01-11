import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentLinksPaymentLinkRequestRestrictionsObject } from './PostPaymentLinksPaymentLinkRequestRestrictionsObject';
import { PostPaymentLinksPaymentLinkRequestRestrictionsObjectSchema } from './PostPaymentLinksPaymentLinkRequestRestrictionsObject';
export type PostPaymentLinksPaymentLinkRequestRestrictions = PostPaymentLinksPaymentLinkRequestRestrictionsObject | string;

export const PostPaymentLinksPaymentLinkRequestRestrictionsSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestRestrictions> = typed<PostPaymentLinksPaymentLinkRequestRestrictions>(union(PostPaymentLinksPaymentLinkRequestRestrictionsObjectSchema, string()));