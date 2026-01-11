import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { DataItemUnion } from './DataItemUnion';
import { DataItemUnionSchema } from './DataItemUnion';
/**
 * ExternalAccountList
 *
 * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
 */
export interface ExternalAccountsProperty {
  /**
   * The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
   */
  data: Array<DataItemUnion>;
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

export const ExternalAccountsPropertySchema: TypedSchema<ExternalAccountsProperty> = typed<ExternalAccountsProperty>(object({
  data: array(DataItemUnionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));