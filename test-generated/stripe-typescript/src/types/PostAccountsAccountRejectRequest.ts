import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostAccountsAccountRejectRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
   */
  reason: string;
}

export const PostAccountsAccountRejectRequestSchema: TypedSchema<PostAccountsAccountRejectRequest> = typed<PostAccountsAccountRejectRequest>(object({
  expand: optional(array(string())),
  reason: string(),
}));