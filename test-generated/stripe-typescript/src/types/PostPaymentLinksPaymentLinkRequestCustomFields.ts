import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsItem } from './PostCheckoutSessionsRequestCustomFieldsItem';
import { PostCheckoutSessionsRequestCustomFieldsItemSchema } from './PostCheckoutSessionsRequestCustomFieldsItem';
export type PostPaymentLinksPaymentLinkRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsItem> | string;

export const PostPaymentLinksPaymentLinkRequestCustomFieldsSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestCustomFields> = typed<PostPaymentLinksPaymentLinkRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsItemSchema), string()));