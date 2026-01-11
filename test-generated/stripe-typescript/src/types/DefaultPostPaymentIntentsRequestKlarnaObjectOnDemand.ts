import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * on_demand_param
 */
export interface DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand {
  averageAmount?: number;
  maximumAmount?: number;
  minimumAmount?: number;
  purchaseInterval?: string;
  purchaseIntervalCount?: number;
}

export const DefaultPostPaymentIntentsRequestKlarnaObjectOnDemandSchema: TypedSchema<DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand> = typed<DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand>(object({
  averageAmount: optional(number()),
  maximumAmount: optional(number()),
  minimumAmount: optional(number()),
  purchaseInterval: optional(string()),
  purchaseIntervalCount: optional(number()),
}));