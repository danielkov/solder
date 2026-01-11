import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_field_label_param
 */
export interface PostCheckoutSessionsRequestCustomFieldsItemLabel {
  custom: string;
  type: string;
}

export const PostCheckoutSessionsRequestCustomFieldsItemLabelSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsItemLabel> = typed<PostCheckoutSessionsRequestCustomFieldsItemLabel>(object({
  custom: string(),
  type: string(),
}));