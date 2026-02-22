import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { TaxCode } from './TaxCode';
import { TaxCodeSchema } from './TaxCode';
/**
 * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
 */
export type TaxCodeOrRef = string | TaxCode;

export const TaxCodeOrRefSchema: TypedSchema<TaxCodeOrRef> = typed<TaxCodeOrRef>(union(string(), TaxCodeSchema));
