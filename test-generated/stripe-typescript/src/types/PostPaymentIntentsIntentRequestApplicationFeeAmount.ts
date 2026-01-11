import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsIntentRequestApplicationFeeAmount = number | string;

export const PostPaymentIntentsIntentRequestApplicationFeeAmountSchema: TypedSchema<PostPaymentIntentsIntentRequestApplicationFeeAmount> = typed<PostPaymentIntentsIntentRequestApplicationFeeAmount>(union(number(), string()));