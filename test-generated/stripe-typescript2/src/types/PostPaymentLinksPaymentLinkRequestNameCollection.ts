import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentLinksPaymentLinkRequestNameCollectionObject } from './PostPaymentLinksPaymentLinkRequestNameCollectionObject';
import { PostPaymentLinksPaymentLinkRequestNameCollectionObjectSchema } from './PostPaymentLinksPaymentLinkRequestNameCollectionObject';
/**
 * Controls settings applied for collecting the customer's name.
 */
export type PostPaymentLinksPaymentLinkRequestNameCollection = PostPaymentLinksPaymentLinkRequestNameCollectionObject | string;

export const PostPaymentLinksPaymentLinkRequestNameCollectionSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestNameCollection> = typed<PostPaymentLinksPaymentLinkRequestNameCollection>(union(PostPaymentLinksPaymentLinkRequestNameCollectionObjectSchema, string()));
