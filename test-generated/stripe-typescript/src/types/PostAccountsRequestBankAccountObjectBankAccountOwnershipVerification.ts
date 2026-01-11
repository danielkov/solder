import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * documents_param
 */
export interface PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification {
  files?: Array<string>;
}

export const PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema: TypedSchema<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification> = typed<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>(object({
  files: optional(array(string())),
}));