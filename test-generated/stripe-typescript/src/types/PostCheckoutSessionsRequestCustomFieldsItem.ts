import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsItemDropdown } from './PostCheckoutSessionsRequestCustomFieldsItemDropdown';
import { PostCheckoutSessionsRequestCustomFieldsItemDropdownSchema } from './PostCheckoutSessionsRequestCustomFieldsItemDropdown';
import type { PostCheckoutSessionsRequestCustomFieldsItemLabel } from './PostCheckoutSessionsRequestCustomFieldsItemLabel';
import { PostCheckoutSessionsRequestCustomFieldsItemLabelSchema } from './PostCheckoutSessionsRequestCustomFieldsItemLabel';
import type { PostCheckoutSessionsRequestCustomFieldsItemNumeric } from './PostCheckoutSessionsRequestCustomFieldsItemNumeric';
import { PostCheckoutSessionsRequestCustomFieldsItemNumericSchema } from './PostCheckoutSessionsRequestCustomFieldsItemNumeric';
import type { PostCheckoutSessionsRequestCustomFieldsItemText } from './PostCheckoutSessionsRequestCustomFieldsItemText';
import { PostCheckoutSessionsRequestCustomFieldsItemTextSchema } from './PostCheckoutSessionsRequestCustomFieldsItemText';
/**
 * custom_field_param
 */
export interface PostCheckoutSessionsRequestCustomFieldsItem {
  /**
   * custom_field_dropdown_param
   */
  dropdown?: PostCheckoutSessionsRequestCustomFieldsItemDropdown;
  key: string;
  /**
   * custom_field_label_param
   */
  label: PostCheckoutSessionsRequestCustomFieldsItemLabel;
  /**
   * custom_field_numeric_param
   */
  numeric?: PostCheckoutSessionsRequestCustomFieldsItemNumeric;
  optional?: boolean;
  /**
   * custom_field_text_param
   */
  text?: PostCheckoutSessionsRequestCustomFieldsItemText;
  type: string;
}

export const PostCheckoutSessionsRequestCustomFieldsItemSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsItem> = typed<PostCheckoutSessionsRequestCustomFieldsItem>(object({
  get dropdown() { return optional(PostCheckoutSessionsRequestCustomFieldsItemDropdownSchema) },
  key: string(),
  label: PostCheckoutSessionsRequestCustomFieldsItemLabelSchema,
  get numeric() { return optional(PostCheckoutSessionsRequestCustomFieldsItemNumericSchema) },
  optional: optional(boolean()),
  get text() { return optional(PostCheckoutSessionsRequestCustomFieldsItemTextSchema) },
  type: string(),
}));