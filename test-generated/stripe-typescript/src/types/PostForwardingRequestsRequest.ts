import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostForwardingRequestsRequestRequest } from './PostForwardingRequestsRequestRequest';
import { PostForwardingRequestsRequestRequestSchema } from './PostForwardingRequestsRequestRequest';
export interface PostForwardingRequestsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
   */
  paymentMethod: string;
  /**
   * The field kinds to be replaced in the forwarded request.
   */
  replacements: Array<string>;
  /**
   * request_param
   *
   * The request body and headers to be sent to the destination endpoint.
   */
  request?: PostForwardingRequestsRequestRequest;
  /**
   * The destination URL for the forwarded request. Must be supported by the config.
   */
  url: string;
}

export const PostForwardingRequestsRequestSchema: TypedSchema<PostForwardingRequestsRequest> = typed<PostForwardingRequestsRequest>(object({
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  paymentMethod: string(),
  replacements: array(string()),
  get request() { return optional(PostForwardingRequestsRequestRequestSchema) },
  url: string(),
}));