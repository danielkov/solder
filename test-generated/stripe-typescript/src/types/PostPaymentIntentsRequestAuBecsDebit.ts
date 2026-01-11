import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestAuBecsDebit {
  accountNumber: string;
  bsbNumber: string;
}

export const PostPaymentIntentsRequestAuBecsDebitSchema: TypedSchema<PostPaymentIntentsRequestAuBecsDebit> = typed<PostPaymentIntentsRequestAuBecsDebit>(object({
  accountNumber: string(),
  bsbNumber: string(),
}));