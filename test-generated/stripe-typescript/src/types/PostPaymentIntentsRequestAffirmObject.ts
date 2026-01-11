import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestAffirmObject {
  captureMethod?: string;
  preferredLocale?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestAffirmObjectSchema: TypedSchema<PostPaymentIntentsRequestAffirmObject> = typed<PostPaymentIntentsRequestAffirmObject>(object({
  captureMethod: optional(string()),
  preferredLocale: optional(string()),
  setupFutureUsage: optional(string()),
}));