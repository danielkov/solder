import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Transfer } from './Transfer';
import { TransferSchema } from './Transfer';
/**
 * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
 */
export type SourceTransferOrRef = string | Transfer;

export const SourceTransferOrRefSchema: TypedSchema<SourceTransferOrRef> = typed<SourceTransferOrRef>(union(string(), TransferSchema));
