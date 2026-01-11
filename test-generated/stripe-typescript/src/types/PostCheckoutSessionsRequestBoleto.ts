import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestBoleto {
  expiresAfterDays?: number;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestBoletoSchema: TypedSchema<PostCheckoutSessionsRequestBoleto> = typed<PostCheckoutSessionsRequestBoleto>(object({
  expiresAfterDays: optional(number()),
  setupFutureUsage: optional(string()),
}));