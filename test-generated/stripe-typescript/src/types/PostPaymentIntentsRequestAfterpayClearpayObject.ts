import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestAfterpayClearpayObject {
  captureMethod?: string;
  reference?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestAfterpayClearpayObjectSchema: TypedSchema<PostPaymentIntentsRequestAfterpayClearpayObject> = typed<PostPaymentIntentsRequestAfterpayClearpayObject>(object({
  captureMethod: optional(string()),
  reference: optional(string()),
  setupFutureUsage: optional(string()),
}));