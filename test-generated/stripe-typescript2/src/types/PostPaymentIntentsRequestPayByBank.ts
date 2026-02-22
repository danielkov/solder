import { string, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestPayByBank = any | string;

export const PostPaymentIntentsRequestPayByBankSchema: TypedSchema<PostPaymentIntentsRequestPayByBank> = typed<PostPaymentIntentsRequestPayByBank>(union(unknown(), string()));
