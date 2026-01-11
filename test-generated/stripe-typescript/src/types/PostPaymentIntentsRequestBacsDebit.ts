import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestBacsDebit {
  accountNumber?: string;
  sortCode?: string;
}

export const PostPaymentIntentsRequestBacsDebitSchema: TypedSchema<PostPaymentIntentsRequestBacsDebit> = typed<PostPaymentIntentsRequestBacsDebit>(object({
  accountNumber: optional(string()),
  sortCode: optional(string()),
}));