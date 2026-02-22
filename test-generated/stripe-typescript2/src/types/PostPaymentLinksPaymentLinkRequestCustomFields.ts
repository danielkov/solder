import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsItem } from './PostCheckoutSessionsRequestCustomFieldsItem';
import { PostCheckoutSessionsRequestCustomFieldsItemSchema } from './PostCheckoutSessionsRequestCustomFieldsItem';
/**
 * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
 */
export type PostPaymentLinksPaymentLinkRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsItem> | string;

export const PostPaymentLinksPaymentLinkRequestCustomFieldsSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestCustomFields> = typed<PostPaymentLinksPaymentLinkRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsItemSchema), string()));
