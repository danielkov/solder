import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { FinancialConnectionsAccountOwnership } from './FinancialConnectionsAccountOwnership';
import { FinancialConnectionsAccountOwnershipSchema } from './FinancialConnectionsAccountOwnership';
export type OwnershipOrRef = string | FinancialConnectionsAccountOwnership;

export const OwnershipOrRefSchema: TypedSchema<OwnershipOrRef> = typed<OwnershipOrRef>(union(string(), FinancialConnectionsAccountOwnershipSchema));