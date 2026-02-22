import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Transfer } from './Transfer';
import { TransferSchema } from './Transfer';
/**
 * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
 */
export type TransferOrRef = string | Transfer;

export const TransferOrRefSchema: TypedSchema<TransferOrRef> = typed<TransferOrRef>(union(string(), TransferSchema));
