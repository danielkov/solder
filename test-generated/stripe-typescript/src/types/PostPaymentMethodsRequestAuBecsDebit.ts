import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
 */
export interface PostPaymentMethodsRequestAuBecsDebit {
  accountNumber: string;
  bsbNumber: string;
}

export const PostPaymentMethodsRequestAuBecsDebitSchema: TypedSchema<PostPaymentMethodsRequestAuBecsDebit> = typed<PostPaymentMethodsRequestAuBecsDebit>(object({
  accountNumber: string(),
  bsbNumber: string(),
}));