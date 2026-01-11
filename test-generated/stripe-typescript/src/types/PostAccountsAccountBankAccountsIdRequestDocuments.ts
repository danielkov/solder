import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification } from './PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification';
import { PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema } from './PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification';
/**
 * external_account_documents_param
 *
 * Documents that may be submitted to satisfy various informational requests.
 */
export interface PostAccountsAccountBankAccountsIdRequestDocuments {
  /**
   * documents_param
   */
  bankAccountOwnershipVerification?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
}

export const PostAccountsAccountBankAccountsIdRequestDocumentsSchema: TypedSchema<PostAccountsAccountBankAccountsIdRequestDocuments> = typed<PostAccountsAccountBankAccountsIdRequestDocuments>(object({
  get bankAccountOwnershipVerification() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
}));