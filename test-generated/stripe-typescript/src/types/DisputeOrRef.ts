import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingDispute } from './IssuingDispute';
import { IssuingDisputeSchema } from './IssuingDispute';
export type DisputeOrRef = string | IssuingDispute;

export const DisputeOrRefSchema: TypedSchema<DisputeOrRef> = typed<DisputeOrRef>(union(string(), IssuingDisputeSchema));