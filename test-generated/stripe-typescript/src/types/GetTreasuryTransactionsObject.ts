import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { GetAccountsUnion } from './GetAccountsUnion';
import { GetAccountsUnionSchema } from './GetAccountsUnion';
/**
 * status_transition_timestamp_specs
 */
export interface GetTreasuryTransactionsObject {
  postedAt?: GetAccountsUnion;
}

export const GetTreasuryTransactionsObjectSchema: TypedSchema<GetTreasuryTransactionsObject> = typed<GetTreasuryTransactionsObject>(object({
  get postedAt() { return optional(GetAccountsUnionSchema) },
}));