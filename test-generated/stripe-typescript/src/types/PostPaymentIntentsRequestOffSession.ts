import { TypedSchema, boolean, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestOffSession = boolean | string;

export const PostPaymentIntentsRequestOffSessionSchema: TypedSchema<PostPaymentIntentsRequestOffSession> = typed<PostPaymentIntentsRequestOffSession>(union(boolean(), string()));