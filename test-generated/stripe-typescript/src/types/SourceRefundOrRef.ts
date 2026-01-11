import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Refund } from './Refund';
import { RefundSchema } from './Refund';
export type SourceRefundOrRef = string | Refund;

export const SourceRefundOrRefSchema: TypedSchema<SourceRefundOrRef> = typed<SourceRefundOrRef>(union(string(), RefundSchema));