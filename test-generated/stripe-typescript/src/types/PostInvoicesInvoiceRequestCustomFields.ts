import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsObject } from './PostCheckoutSessionsRequestCustomFieldsObject';
import { PostCheckoutSessionsRequestCustomFieldsObjectSchema } from './PostCheckoutSessionsRequestCustomFieldsObject';
export type PostInvoicesInvoiceRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsObject> | string;

export const PostInvoicesInvoiceRequestCustomFieldsSchema: TypedSchema<PostInvoicesInvoiceRequestCustomFields> = typed<PostInvoicesInvoiceRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsObjectSchema), string()));