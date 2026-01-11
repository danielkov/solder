import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * applicable_price_param
 */
export interface GetBillingCreditBalanceSummaryObjectPricesItem {
  id: string;
}

export const GetBillingCreditBalanceSummaryObjectPricesItemSchema: TypedSchema<GetBillingCreditBalanceSummaryObjectPricesItem> = typed<GetBillingCreditBalanceSummaryObjectPricesItem>(object({
  id: string(),
}));