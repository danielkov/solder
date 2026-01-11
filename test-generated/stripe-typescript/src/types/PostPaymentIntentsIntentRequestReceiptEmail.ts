import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsIntentRequestReceiptEmail = string | string;

export const PostPaymentIntentsIntentRequestReceiptEmailSchema: TypedSchema<PostPaymentIntentsIntentRequestReceiptEmail> = typed<PostPaymentIntentsIntentRequestReceiptEmail>(union(string(), string()));