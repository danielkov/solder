import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { DeletedPrice } from './DeletedPrice';
import { DeletedPriceSchema } from './DeletedPrice';
import type { Price } from './Price';
import { PriceSchema } from './Price';
/**
 * ID of the price used to generate the invoice item.
 */
export type PriceUnion = string | Price | DeletedPrice;

export const PriceUnionSchema: TypedSchema<PriceUnion> = typed<PriceUnion>(union(string(), PriceSchema, DeletedPriceSchema));
