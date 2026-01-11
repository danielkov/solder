import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_field_text_param
 */
export interface PostCheckoutSessionsRequestCustomFieldsItemText {
  defaultValue?: string;
  maximumLength?: number;
  minimumLength?: number;
}

export const PostCheckoutSessionsRequestCustomFieldsItemTextSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsItemText> = typed<PostCheckoutSessionsRequestCustomFieldsItemText>(object({
  defaultValue: optional(string()),
  maximumLength: optional(number()),
  minimumLength: optional(number()),
}));