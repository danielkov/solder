import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
export type DefaultTaxRatesItemOrRef = string | TaxRate;

export const DefaultTaxRatesItemOrRefSchema: TypedSchema<DefaultTaxRatesItemOrRef> = typed<DefaultTaxRatesItemOrRef>(union(string(), TaxRateSchema));