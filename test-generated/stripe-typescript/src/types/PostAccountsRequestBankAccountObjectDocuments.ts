import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification } from './PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification';
import { PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema } from './PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification';
/**
 * external_account_documents_param
 */
export interface PostAccountsRequestBankAccountObjectDocuments {
  /**
   * documents_param
   */
  bankAccountOwnershipVerification?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
}

export const PostAccountsRequestBankAccountObjectDocumentsSchema: TypedSchema<PostAccountsRequestBankAccountObjectDocuments> = typed<PostAccountsRequestBankAccountObjectDocuments>(object({
  get bankAccountOwnershipVerification() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
}));