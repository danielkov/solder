import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostApplePayDomainsRequest {
  domainName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostApplePayDomainsRequestSchema: TypedSchema<PostApplePayDomainsRequest> = typed<PostApplePayDomainsRequest>(object({
  domainName: string(),
  expand: optional(array(string())),
}));