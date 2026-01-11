import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
 */
export interface PostPaymentMethodsRequestBacsDebit {
  accountNumber?: string;
  sortCode?: string;
}

export const PostPaymentMethodsRequestBacsDebitSchema: TypedSchema<PostPaymentMethodsRequestBacsDebit> = typed<PostPaymentMethodsRequestBacsDebit>(object({
  accountNumber: optional(string()),
  sortCode: optional(string()),
}));