import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBankAccountObjectDocuments } from './PostAccountsRequestBankAccountObjectDocuments';
import { PostAccountsRequestBankAccountObjectDocumentsSchema } from './PostAccountsRequestBankAccountObjectDocuments';
/**
 * external_account_payout_bank_account
 */
export interface PostAccountsRequestBankAccountObject {
  accountHolderName?: string;
  accountHolderType?: string;
  accountNumber: string;
  accountType?: string;
  country: string;
  currency?: string;
  /**
   * external_account_documents_param
   */
  documents?: PostAccountsRequestBankAccountObjectDocuments;
  object?: string;
  routingNumber?: string;
}

export const PostAccountsRequestBankAccountObjectSchema: TypedSchema<PostAccountsRequestBankAccountObject> = typed<PostAccountsRequestBankAccountObject>(object({
  accountHolderName: optional(string()),
  accountHolderType: optional(string()),
  accountNumber: string(),
  accountType: optional(string()),
  country: string(),
  currency: optional(string()),
  get documents() { return optional(PostAccountsRequestBankAccountObjectDocumentsSchema) },
  object: optional(string()),
  routingNumber: optional(string()),
}));