import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';

import type { ForwardedRequestHeader } from './ForwardedRequestHeader';
import { ForwardedRequestHeaderSchema } from './ForwardedRequestHeader';
/**
 * ForwardedRequestDetails
 *
 * Details about the request forwarded to the destination endpoint.
 */
export interface ForwardedRequestDetails {
  /**
   * The body payload to send to the destination endpoint.
   */
  body: string;
  /**
   * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
   */
  headers: Array<ForwardedRequestHeader>;
  /**
   * The HTTP method used to call the destination endpoint.
   */
  httpMethod: string;
}

export const ForwardedRequestDetailsSchema: TypedSchema<ForwardedRequestDetails> = typed<ForwardedRequestDetails>(object({
  body: string(),
  headers: array(ForwardedRequestHeaderSchema),
  httpMethod: string(),
}));