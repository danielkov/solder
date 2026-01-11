import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * bacs_debit_payments_specs
 */
export interface PostAccountsRequestBacsDebitPayments {
  displayName?: string;
}

export const PostAccountsRequestBacsDebitPaymentsSchema: TypedSchema<PostAccountsRequestBacsDebitPayments> = typed<PostAccountsRequestBacsDebitPayments>(object({
  displayName: optional(string()),
}));