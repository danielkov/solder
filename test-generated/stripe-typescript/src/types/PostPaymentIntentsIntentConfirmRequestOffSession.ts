import { TypedSchema, boolean, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsIntentConfirmRequestOffSession = boolean | string;

export const PostPaymentIntentsIntentConfirmRequestOffSessionSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequestOffSession> = typed<PostPaymentIntentsIntentConfirmRequestOffSession>(union(boolean(), string()));