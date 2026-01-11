import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_param
 */
export interface PostPaymentIntentsRequestAcssDebit {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
}

export const PostPaymentIntentsRequestAcssDebitSchema: TypedSchema<PostPaymentIntentsRequestAcssDebit> = typed<PostPaymentIntentsRequestAcssDebit>(object({
  accountNumber: string(),
  institutionNumber: string(),
  transitNumber: string(),
}));