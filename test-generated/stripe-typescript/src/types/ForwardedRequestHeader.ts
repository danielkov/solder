import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ForwardedRequestHeader
 *
 * Header data.
 */
export interface ForwardedRequestHeader {
  /**
   * The header name.
   */
  name: string;
  /**
   * The header value.
   */
  value: string;
}

export const ForwardedRequestHeaderSchema: TypedSchema<ForwardedRequestHeader> = typed<ForwardedRequestHeader>(object({
  name: string(),
  value: string(),
}));