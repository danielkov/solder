import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_field_option_param
 */
export interface PostCheckoutSessionsRequestCustomFieldsItemOptionsItem {
  label: string;
  value: string;
}

export const PostCheckoutSessionsRequestCustomFieldsItemOptionsItemSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsItemOptionsItem> = typed<PostCheckoutSessionsRequestCustomFieldsItemOptionsItem>(object({
  label: string(),
  value: string(),
}));