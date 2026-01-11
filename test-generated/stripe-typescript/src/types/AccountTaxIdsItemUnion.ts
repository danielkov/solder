import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DeletedTaxId } from './DeletedTaxId';
import { DeletedTaxIdSchema } from './DeletedTaxId';
import type { TaxId } from './TaxId';
import { TaxIdSchema } from './TaxId';
export type AccountTaxIdsItemUnion = string | TaxId | DeletedTaxId;

export const AccountTaxIdsItemUnionSchema: TypedSchema<AccountTaxIdsItemUnion> = typed<AccountTaxIdsItemUnion>(union(string(), TaxIdSchema, DeletedTaxIdSchema));