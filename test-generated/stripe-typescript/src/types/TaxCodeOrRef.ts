import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TaxCode } from './TaxCode';
import { TaxCodeSchema } from './TaxCode';
export type TaxCodeOrRef = string | TaxCode;

export const TaxCodeOrRefSchema: TypedSchema<TaxCodeOrRef> = typed<TaxCodeOrRef>(union(string(), TaxCodeSchema));