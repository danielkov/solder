import { TypedSchema, string, typed, union, unknown } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestInteracPresent = any | string;

export const PostPaymentIntentsRequestInteracPresentSchema: TypedSchema<PostPaymentIntentsRequestInteracPresent> = typed<PostPaymentIntentsRequestInteracPresent>(union(unknown(), string()));