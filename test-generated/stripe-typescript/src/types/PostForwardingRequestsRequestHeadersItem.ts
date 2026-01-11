import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * header_param
 */
export interface PostForwardingRequestsRequestHeadersItem {
  name: string;
  value: string;
}

export const PostForwardingRequestsRequestHeadersItemSchema: TypedSchema<PostForwardingRequestsRequestHeadersItem> = typed<PostForwardingRequestsRequestHeadersItem>(object({
  name: string(),
  value: string(),
}));