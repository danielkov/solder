import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestEpsObject {
  setupFutureUsage?: string;
}

export const DefaultPostPaymentIntentsRequestEpsObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestEpsObject> = typed<DefaultPostPaymentIntentsRequestEpsObject>(object({
  setupFutureUsage: optional(string()),
}));