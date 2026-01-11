import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OwnersProperty } from './OwnersProperty';
import { OwnersPropertySchema } from './OwnersProperty';
/**
 * BankConnectionsResourceOwnership
 *
 * Describes a snapshot of the owners of an account at a particular point in time.
 */
export interface FinancialConnectionsAccountOwnership {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * BankConnectionsResourceOwnerList
   *
   * A paginated list of owners for this account.
   */
  owners: OwnersProperty;
}

export const FinancialConnectionsAccountOwnershipSchema: TypedSchema<FinancialConnectionsAccountOwnership> = typed<FinancialConnectionsAccountOwnership>(object({
  created: number(),
  id: string(),
  object: string(),
  owners: OwnersPropertySchema,
}));