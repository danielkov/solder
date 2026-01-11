import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_field_numeric_param
 */
export interface PostCheckoutSessionsRequestCustomFieldsItemNumeric {
  defaultValue?: string;
  maximumLength?: number;
  minimumLength?: number;
}

export const PostCheckoutSessionsRequestCustomFieldsItemNumericSchema: TypedSchema<PostCheckoutSessionsRequestCustomFieldsItemNumeric> = typed<PostCheckoutSessionsRequestCustomFieldsItemNumeric>(object({
  defaultValue: optional(string()),
  maximumLength: optional(number()),
  minimumLength: optional(number()),
}));