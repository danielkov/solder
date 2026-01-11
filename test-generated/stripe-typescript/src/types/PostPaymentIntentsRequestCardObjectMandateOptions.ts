import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_options_param
 */
export interface PostPaymentIntentsRequestCardObjectMandateOptions {
  amount: number;
  amountType: string;
  description?: string;
  endDate?: number;
  interval: string;
  intervalCount?: number;
  reference: string;
  startDate: number;
  supportedTypes?: Array<string>;
}

export const PostPaymentIntentsRequestCardObjectMandateOptionsSchema: TypedSchema<PostPaymentIntentsRequestCardObjectMandateOptions> = typed<PostPaymentIntentsRequestCardObjectMandateOptions>(object({
  amount: number(),
  amountType: string(),
  description: optional(string()),
  endDate: optional(number()),
  interval: string(),
  intervalCount: optional(number()),
  reference: string(),
  startDate: number(),
  supportedTypes: optional(array(string())),
}));