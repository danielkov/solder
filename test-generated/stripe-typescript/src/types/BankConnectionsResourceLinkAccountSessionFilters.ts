import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BankConnectionsResourceLinkAccountSessionFilters
 *
 * 
 */
export interface BankConnectionsResourceLinkAccountSessionFilters {
  /**
   * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
   */
  accountSubcategories?: Array<string>;
  /**
   * List of countries from which to filter accounts.
   */
  countries?: Array<string>;
}

export const BankConnectionsResourceLinkAccountSessionFiltersSchema: TypedSchema<BankConnectionsResourceLinkAccountSessionFilters> = typed<BankConnectionsResourceLinkAccountSessionFilters>(object({
  accountSubcategories: optional(array(string())),
  countries: optional(array(string())),
}));