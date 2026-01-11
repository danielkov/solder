import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsItemOptionsItem } from './PostCheckoutSessionsRequestCustomFieldsItemOptionsItem';
import { PostCheckoutSessionsRequestCustomFieldsItemOptionsItemSchema } from './PostCheckoutSessionsRequestCustomFieldsItemOptionsItem';
/**
 * custom_field_dropdown_param
 */
export interface PostCheckoutSessionsRequestCustomFieldsItemDropdown {
  defaultValue?: string;
  options: Array<PostCheckoutSessionsRequestCustomFieldsItemOptionsItem>;
}

export const PostCheckoutSessionsRequestCustomFieldsItemDropdownSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsItemDropdown> = typed<PostCheckoutSessionsRequestCustomFieldsItemDropdown>(object({
  defaultValue: optional(string()),
  options: array(PostCheckoutSessionsRequestCustomFieldsItemOptionsItemSchema),
}));