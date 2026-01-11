import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
export interface PostCreditNotesIdRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Credit note memo.
   */
  memo?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
}

export const PostCreditNotesIdRequestSchema: TypedSchema<PostCreditNotesIdRequest> = typed<PostCreditNotesIdRequest>(object({
  expand: optional(array(string())),
  memo: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
}));