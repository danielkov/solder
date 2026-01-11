import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TaxId } from './TaxId';
import { TaxIdSchema } from './TaxId';
export type DefaultAccountTaxIdsItemOrRef = string | TaxId;

export const DefaultAccountTaxIdsItemOrRefSchema: TypedSchema<DefaultAccountTaxIdsItemOrRef> = typed<DefaultAccountTaxIdsItemOrRef>(union(string(), TaxIdSchema));