import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentLinksPaymentLinkRequestNameCollectionObject } from './PostPaymentLinksPaymentLinkRequestNameCollectionObject';
import { PostPaymentLinksPaymentLinkRequestNameCollectionObjectSchema } from './PostPaymentLinksPaymentLinkRequestNameCollectionObject';
export type PostPaymentLinksPaymentLinkRequestNameCollection = PostPaymentLinksPaymentLinkRequestNameCollectionObject | string;

export const PostPaymentLinksPaymentLinkRequestNameCollectionSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestNameCollection> = typed<PostPaymentLinksPaymentLinkRequestNameCollection>(union(PostPaymentLinksPaymentLinkRequestNameCollectionObjectSchema, string()));