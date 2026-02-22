import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Price } from './Price';
import { PriceSchema } from './Price';
/**
 * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
 */
export type DefaultPriceOrRef = string | Price;

export const DefaultPriceOrRefSchema: TypedSchema<DefaultPriceOrRef> = typed<DefaultPriceOrRef>(union(string(), PriceSchema));
