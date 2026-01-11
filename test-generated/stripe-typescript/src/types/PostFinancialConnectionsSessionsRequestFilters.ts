import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * filters_params
 *
 * Filters to restrict the kinds of accounts to collect.
 */
export interface PostFinancialConnectionsSessionsRequestFilters {
  accountSubcategories?: Array<string>;
  countries?: Array<string>;
}

export const PostFinancialConnectionsSessionsRequestFiltersSchema: TypedSchema<PostFinancialConnectionsSessionsRequestFilters> = typed<PostFinancialConnectionsSessionsRequestFilters>(object({
  accountSubcategories: optional(array(string())),
  countries: optional(array(string())),
}));