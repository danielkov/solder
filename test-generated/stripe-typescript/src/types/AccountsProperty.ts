import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FinancialConnectionsAccount } from './FinancialConnectionsAccount';
import { FinancialConnectionsAccountSchema } from './FinancialConnectionsAccount';
/**
 * BankConnectionsResourceLinkedAccountList
 *
 * The accounts that were collected as part of this Session.
 */
export interface AccountsProperty {
  /**
   * Details about each object.
   */
  data: Array<FinancialConnectionsAccount>;
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

export const AccountsPropertySchema: TypedSchema<AccountsProperty> = typed<AccountsProperty>(object({
  data: array(FinancialConnectionsAccountSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));