import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestKonbiniObjectConfirmationNumber = string | string;

export const PostPaymentIntentsRequestKonbiniObjectConfirmationNumberSchema: TypedSchema<PostPaymentIntentsRequestKonbiniObjectConfirmationNumber> = typed<PostPaymentIntentsRequestKonbiniObjectConfirmationNumber>(union(string(), string()));