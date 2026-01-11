import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestBoletoObject {
  expiresAfterDays?: number;
  setupFutureUsage?: string;
}

export const DefaultPostPaymentIntentsRequestBoletoObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestBoletoObject> = typed<DefaultPostPaymentIntentsRequestBoletoObject>(object({
  expiresAfterDays: optional(number()),
  setupFutureUsage: optional(string()),
}));