import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject } from './PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject';
import { PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObjectSchema } from './PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject';
/**
 * Configuration for collecting the customer's shipping address.
 */
export type PostPaymentLinksPaymentLinkRequestShippingAddressCollection = PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject | string;

export const PostPaymentLinksPaymentLinkRequestShippingAddressCollectionSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestShippingAddressCollection> = typed<PostPaymentLinksPaymentLinkRequestShippingAddressCollection>(union(PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObjectSchema, string()));
