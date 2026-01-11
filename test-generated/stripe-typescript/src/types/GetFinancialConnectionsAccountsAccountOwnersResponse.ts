import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FinancialConnectionsAccountOwner } from './FinancialConnectionsAccountOwner';
import { FinancialConnectionsAccountOwnerSchema } from './FinancialConnectionsAccountOwner';
/**
 * BankConnectionsResourceOwnerList
 *
 * 
 */
export interface GetFinancialConnectionsAccountsAccountOwnersResponse {
  /**
   * Details about each object.
   */
  data: Array<FinancialConnectionsAccountOwner>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetFinancialConnectionsAccountsAccountOwnersResponseSchema: TypedSchema<GetFinancialConnectionsAccountsAccountOwnersResponse> = typed<GetFinancialConnectionsAccountsAccountOwnersResponse>(object({
  data: array(FinancialConnectionsAccountOwnerSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));