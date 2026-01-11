import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * capability_param
 */
export interface PostAccountsRequestAcssDebitPayments {
  requested?: boolean;
}

export const PostAccountsRequestAcssDebitPaymentsSchema: TypedSchema<PostAccountsRequestAcssDebitPayments> = typed<PostAccountsRequestAcssDebitPayments>(object({
  requested: optional(boolean()),
}));