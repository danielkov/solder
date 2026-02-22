import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
/**
 * ID of the charge that was used to fund the transfer. If null, the transfer was funded from the available balance.
 */
export type SourceTransactionOrRef = string | Charge;

export const SourceTransactionOrRefSchema: TypedSchema<SourceTransactionOrRef> = typed<SourceTransactionOrRef>(union(string(), ChargeSchema));
