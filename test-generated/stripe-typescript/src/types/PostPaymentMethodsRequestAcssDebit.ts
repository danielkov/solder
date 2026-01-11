import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_param
 *
 * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
 */
export interface PostPaymentMethodsRequestAcssDebit {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
}

export const PostPaymentMethodsRequestAcssDebitSchema: TypedSchema<PostPaymentMethodsRequestAcssDebit> = typed<PostPaymentMethodsRequestAcssDebit>(object({
  accountNumber: string(),
  institutionNumber: string(),
  transitNumber: string(),
}));