import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * setup_intent_mandate_options_param
 */
export interface DefaultPostSetupIntentsRequestMandateOptions {
  amount: number;
  amountType: string;
  currency: string;
  description?: string;
  endDate?: number;
  interval: string;
  intervalCount?: number;
  reference: string;
  startDate: number;
  supportedTypes?: Array<string>;
}

export const DefaultPostSetupIntentsRequestMandateOptionsSchema: TypedSchema<DefaultPostSetupIntentsRequestMandateOptions> = typed<DefaultPostSetupIntentsRequestMandateOptions>(object({
  amount: number(),
  amountType: string(),
  currency: string(),
  description: optional(string()),
  endDate: optional(number()),
  interval: string(),
  intervalCount: optional(number()),
  reference: string(),
  startDate: number(),
  supportedTypes: optional(array(string())),
}));