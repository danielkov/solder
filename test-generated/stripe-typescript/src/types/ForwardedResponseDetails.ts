import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { ForwardedRequestHeader } from './ForwardedRequestHeader';
import { ForwardedRequestHeaderSchema } from './ForwardedRequestHeader';
/**
 * ForwardedResponseDetails
 *
 * Details about the response from the destination endpoint.
 */
export interface ForwardedResponseDetails {
  /**
   * The response body from the destination endpoint to Stripe.
   */
  body: string;
  /**
   * HTTP headers that the destination endpoint returned.
   */
  headers: Array<ForwardedRequestHeader>;
  /**
   * The HTTP status code that the destination endpoint returned.
   */
  status: number;
}

export const ForwardedResponseDetailsSchema: TypedSchema<ForwardedResponseDetails> = typed<ForwardedResponseDetails>(object({
  body: string(),
  headers: array(ForwardedRequestHeaderSchema),
  status: number(),
}));