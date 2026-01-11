import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Price } from './Price';
import { PriceSchema } from './Price';
export type DefaultPriceOrRef = string | Price;

export const DefaultPriceOrRefSchema: TypedSchema<DefaultPriceOrRef> = typed<DefaultPriceOrRef>(union(string(), PriceSchema));