import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
/**
 * BankConnectionsResourceAccountholder
 *
 * 
 */
export interface BankConnectionsResourceAccountholder {
  /**
   * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
   */
  account?: AccountOrRef;
  /**
   * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
   */
  customer?: CustomerOrRef;
  /**
   * Type of account holder that this account belongs to.
   */
  type: string;
}

export const BankConnectionsResourceAccountholderSchema: TypedSchema<BankConnectionsResourceAccountholder> = typed<BankConnectionsResourceAccountholder>(object({
  get account() { return optional(AccountOrRefSchema) },
  get customer() { return optional(CustomerOrRefSchema) },
  type: string(),
}));