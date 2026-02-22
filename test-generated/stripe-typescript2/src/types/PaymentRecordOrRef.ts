import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PaymentRecord } from './PaymentRecord';
import { PaymentRecordSchema } from './PaymentRecord';
/**
 * ID of the PaymentRecord associated with this payment when `type` is `payment_record`.
 */
export type PaymentRecordOrRef = string | PaymentRecord;

export const PaymentRecordOrRefSchema: TypedSchema<PaymentRecordOrRef> = typed<PaymentRecordOrRef>(union(string(), PaymentRecordSchema));
