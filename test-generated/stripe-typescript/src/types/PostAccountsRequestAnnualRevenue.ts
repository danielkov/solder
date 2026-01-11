import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * annual_revenue_specs
 */
export interface PostAccountsRequestAnnualRevenue {
  amount: number;
  currency: string;
  fiscalYearEnd: string;
}

export const PostAccountsRequestAnnualRevenueSchema: TypedSchema<PostAccountsRequestAnnualRevenue> = typed<PostAccountsRequestAnnualRevenue>(object({
  amount: number(),
  currency: string(),
  fiscalYearEnd: string(),
}));