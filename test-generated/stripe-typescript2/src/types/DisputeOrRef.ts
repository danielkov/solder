import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingDispute } from './IssuingDispute';
import { IssuingDisputeSchema } from './IssuingDispute';
/**
 * If you've disputed the transaction, the ID of the dispute.
 */
export type DisputeOrRef = string | IssuingDispute;

export const DisputeOrRefSchema: TypedSchema<DisputeOrRef> = typed<DisputeOrRef>(union(string(), IssuingDisputeSchema));
