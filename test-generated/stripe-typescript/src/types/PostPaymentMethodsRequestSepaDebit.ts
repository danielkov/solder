import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
 */
export interface PostPaymentMethodsRequestSepaDebit {
  iban: string;
}

export const PostPaymentMethodsRequestSepaDebitSchema: TypedSchema<PostPaymentMethodsRequestSepaDebit> = typed<PostPaymentMethodsRequestSepaDebit>(object({
  iban: string(),
}));