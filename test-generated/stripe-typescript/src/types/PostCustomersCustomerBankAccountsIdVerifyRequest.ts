import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostCustomersCustomerBankAccountsIdVerifyRequest {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: Array<number>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostCustomersCustomerBankAccountsIdVerifyRequestSchema: TypedSchema<PostCustomersCustomerBankAccountsIdVerifyRequest> = typed<PostCustomersCustomerBankAccountsIdVerifyRequest>(object({
  amounts: optional(array(number())),
  expand: optional(array(string())),
}));