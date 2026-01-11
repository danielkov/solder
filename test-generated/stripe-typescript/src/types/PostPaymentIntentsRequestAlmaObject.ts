import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestAlmaObject {
  captureMethod?: string;
}

export const PostPaymentIntentsRequestAlmaObjectSchema: TypedSchema<PostPaymentIntentsRequestAlmaObject> = typed<PostPaymentIntentsRequestAlmaObject>(object({
  captureMethod: optional(string()),
}));