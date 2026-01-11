import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestBancontactObject {
  preferredLanguage?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestBancontactObjectSchema: TypedSchema<PostPaymentIntentsRequestBancontactObject> = typed<PostPaymentIntentsRequestBancontactObject>(object({
  preferredLanguage: optional(string()),
  setupFutureUsage: optional(string()),
}));