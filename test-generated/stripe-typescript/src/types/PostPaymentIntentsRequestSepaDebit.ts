import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestSepaDebit {
  iban: string;
}

export const PostPaymentIntentsRequestSepaDebitSchema: TypedSchema<PostPaymentIntentsRequestSepaDebit> = typed<PostPaymentIntentsRequestSepaDebit>(object({
  iban: string(),
}));