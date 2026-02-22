import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsObject } from './PostCheckoutSessionsRequestCustomFieldsObject';
import { PostCheckoutSessionsRequestCustomFieldsObjectSchema } from './PostCheckoutSessionsRequestCustomFieldsObject';
/**
 * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
 */
export type PostInvoicesInvoiceRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsObject> | string;

export const PostInvoicesInvoiceRequestCustomFieldsSchema: TypedSchema<PostInvoicesInvoiceRequestCustomFields> = typed<PostInvoicesInvoiceRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsObjectSchema), string()));
