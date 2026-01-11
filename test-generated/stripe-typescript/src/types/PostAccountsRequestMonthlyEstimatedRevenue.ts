import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * monthly_estimated_revenue_specs
 */
export interface PostAccountsRequestMonthlyEstimatedRevenue {
  amount: number;
  currency: string;
}

export const PostAccountsRequestMonthlyEstimatedRevenueSchema: TypedSchema<PostAccountsRequestMonthlyEstimatedRevenue> = typed<PostAccountsRequestMonthlyEstimatedRevenue>(object({
  amount: number(),
  currency: string(),
}));