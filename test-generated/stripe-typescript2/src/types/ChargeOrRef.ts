import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
/**
 * ID of the charge that the application fee was taken from.
 */
export type ChargeOrRef = string | Charge;

export const ChargeOrRefSchema: TypedSchema<ChargeOrRef> = typed<ChargeOrRef>(union(string(), ChargeSchema));
