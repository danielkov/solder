import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentRecord } from './PaymentRecord';
import { PaymentRecordSchema } from './PaymentRecord';
export type PaymentRecordOrRef = string | PaymentRecord;

export const PaymentRecordOrRefSchema: TypedSchema<PaymentRecordOrRef> = typed<PaymentRecordOrRef>(union(string(), PaymentRecordSchema));