import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestPaypal {
  captureMethod?: string;
  preferredLocale?: string;
  reference?: string;
  riskCorrelationId?: string;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestPaypalSchema: TypedSchema<PostCheckoutSessionsRequestPaypal> = typed<PostCheckoutSessionsRequestPaypal>(object({
  captureMethod: optional(string()),
  preferredLocale: optional(string()),
  reference: optional(string()),
  riskCorrelationId: optional(string()),
  setupFutureUsage: optional(string()),
}));