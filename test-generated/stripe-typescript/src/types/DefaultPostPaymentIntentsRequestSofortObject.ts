import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestSofortObject {
  preferredLanguage?: string;
  setupFutureUsage?: string;
}

export const DefaultPostPaymentIntentsRequestSofortObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestSofortObject> = typed<DefaultPostPaymentIntentsRequestSofortObject>(object({
  preferredLanguage: optional(string()),
  setupFutureUsage: optional(string()),
}));