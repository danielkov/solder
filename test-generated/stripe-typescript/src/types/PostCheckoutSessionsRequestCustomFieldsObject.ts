import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_field_params
 */
export interface PostCheckoutSessionsRequestCustomFieldsObject {
  name: string;
  value: string;
}

export const PostCheckoutSessionsRequestCustomFieldsObjectSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsObject> = typed<PostCheckoutSessionsRequestCustomFieldsObject>(object({
  name: string(),
  value: string(),
}));