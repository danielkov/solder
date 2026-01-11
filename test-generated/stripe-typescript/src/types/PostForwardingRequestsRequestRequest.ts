import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostForwardingRequestsRequestHeadersItem } from './PostForwardingRequestsRequestHeadersItem';
import { PostForwardingRequestsRequestHeadersItemSchema } from './PostForwardingRequestsRequestHeadersItem';
/**
 * request_param
 *
 * The request body and headers to be sent to the destination endpoint.
 */
export interface PostForwardingRequestsRequestRequest {
  body?: string;
  headers?: Array<PostForwardingRequestsRequestHeadersItem>;
}

export const PostForwardingRequestsRequestRequestSchema: TypedSchema<PostForwardingRequestsRequestRequest> = typed<PostForwardingRequestsRequestRequest>(object({
  body: optional(string()),
  get headers() { return optional(array(PostForwardingRequestsRequestHeadersItemSchema)) },
}));