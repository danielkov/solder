import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestPixObject {
  amountIncludesIof?: string;
  expiresAfterSeconds?: number;
  expiresAt?: number;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestPixObjectSchema: TypedSchema<PostPaymentIntentsRequestPixObject> = typed<PostPaymentIntentsRequestPixObject>(object({
  amountIncludesIof: optional(string()),
  expiresAfterSeconds: optional(number()),
  expiresAt: optional(number()),
  setupFutureUsage: optional(string()),
}));