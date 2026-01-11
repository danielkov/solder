import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_text_position_param
 */
export interface PostCheckoutSessionsRequestAfterSubmitObject {
  message: string;
}

export const PostCheckoutSessionsRequestAfterSubmitObjectSchema: TypedSchema<PostCheckoutSessionsRequestAfterSubmitObject> = typed<PostCheckoutSessionsRequestAfterSubmitObject>(object({
  message: string(),
}));