import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
/**
 * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
 */
export type OriginatingTransactionOrRef = string | Charge;

export const OriginatingTransactionOrRefSchema: TypedSchema<OriginatingTransactionOrRef> = typed<OriginatingTransactionOrRef>(union(string(), ChargeSchema));
