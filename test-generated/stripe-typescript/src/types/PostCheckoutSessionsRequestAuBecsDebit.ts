import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestAuBecsDebit {
  setupFutureUsage?: string;
  targetDate?: string;
}

export const PostCheckoutSessionsRequestAuBecsDebitSchema: TypedSchema<PostCheckoutSessionsRequestAuBecsDebit> = typed<PostCheckoutSessionsRequestAuBecsDebit>(object({
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
}));