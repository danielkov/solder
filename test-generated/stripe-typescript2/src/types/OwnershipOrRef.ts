import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { FinancialConnectionsAccountOwnership } from './FinancialConnectionsAccountOwnership';
import { FinancialConnectionsAccountOwnershipSchema } from './FinancialConnectionsAccountOwnership';
/**
 * The most recent information about the account's owners.
 */
export type OwnershipOrRef = string | FinancialConnectionsAccountOwnership;

export const OwnershipOrRefSchema: TypedSchema<OwnershipOrRef> = typed<OwnershipOrRef>(union(string(), FinancialConnectionsAccountOwnershipSchema));
