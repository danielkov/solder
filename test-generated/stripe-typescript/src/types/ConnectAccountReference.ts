import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
/**
 * ConnectAccountReference
 *
 * 
 */
export interface ConnectAccountReference {
  /**
   * The connected account being referenced when `type` is `account`.
   */
  account?: AccountOrRef;
  /**
   * Type of the account referenced.
   */
  type: string;
}

export const ConnectAccountReferenceSchema: TypedSchema<ConnectAccountReference> = typed<ConnectAccountReference>(object({
  get account() { return optional(AccountOrRefSchema) },
  type: string(),
}));