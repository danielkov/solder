import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsObject } from './PostCheckoutSessionsRequestCustomFieldsObject';
import { PostCheckoutSessionsRequestCustomFieldsObjectSchema } from './PostCheckoutSessionsRequestCustomFieldsObject';
/**
 * A list of up to 4 custom fields to be displayed on the invoice.
 */
export type PostInvoicesRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsObject> | string;

export const PostInvoicesRequestCustomFieldsSchema: TypedSchema<PostInvoicesRequestCustomFields> = typed<PostInvoicesRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsObjectSchema), string()));
