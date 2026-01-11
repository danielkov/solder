import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
import type { ApplicationOrRef } from './ApplicationOrRef';
import { ApplicationOrRefSchema } from './ApplicationOrRef';
import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
/**
 * TaxIDsOwner
 *
 * 
 */
export interface TaxIDsOwner {
  /**
   * The account being referenced when `type` is `account`.
   */
  account?: AccountOrRef;
  /**
   * The Connect Application being referenced when `type` is `application`.
   */
  application?: ApplicationOrRef;
  /**
   * The customer being referenced when `type` is `customer`.
   */
  customer?: CustomerOrRef;
  /**
   * Type of owner referenced.
   */
  type: string;
}

export const TaxIDsOwnerSchema: TypedSchema<TaxIDsOwner> = typed<TaxIDsOwner>(object({
  get account() { return optional(AccountOrRefSchema) },
  get application() { return optional(ApplicationOrRefSchema) },
  get customer() { return optional(CustomerOrRefSchema) },
  type: string(),
}));