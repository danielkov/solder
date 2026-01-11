import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestAuBecsDebitObject {
  setupFutureUsage?: string;
  targetDate?: string;
}

export const DefaultPostPaymentIntentsRequestAuBecsDebitObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestAuBecsDebitObject> = typed<DefaultPostPaymentIntentsRequestAuBecsDebitObject>(object({
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
}));