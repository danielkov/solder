import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsObject } from './PostCheckoutSessionsRequestCustomFieldsObject';
import { PostCheckoutSessionsRequestCustomFieldsObjectSchema } from './PostCheckoutSessionsRequestCustomFieldsObject';
export type PostInvoicesRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsObject> | string;

export const PostInvoicesRequestCustomFieldsSchema: TypedSchema<PostInvoicesRequestCustomFields> = typed<PostInvoicesRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsObjectSchema), string()));