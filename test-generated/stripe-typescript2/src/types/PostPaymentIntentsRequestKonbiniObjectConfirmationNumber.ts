import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestKonbiniObjectConfirmationNumber = string | string;

export const PostPaymentIntentsRequestKonbiniObjectConfirmationNumberSchema: TypedSchema<PostPaymentIntentsRequestKonbiniObjectConfirmationNumber> = typed<PostPaymentIntentsRequestKonbiniObjectConfirmationNumber>(union(string(), string()));
