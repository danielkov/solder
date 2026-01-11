import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_payment_method_options_param
 */
export interface PostPaymentIntentsRequestCashappObject {
  captureMethod?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestCashappObjectSchema: TypedSchema<PostPaymentIntentsRequestCashappObject> = typed<PostPaymentIntentsRequestCashappObject>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
}));