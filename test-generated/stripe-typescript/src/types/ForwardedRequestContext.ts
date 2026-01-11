import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ForwardedRequestContext
 *
 * Metadata about the forwarded request.
 */
export interface ForwardedRequestContext {
  /**
   * The time it took in milliseconds for the destination endpoint to respond.
   */
  destinationDuration: number;
  /**
   * The IP address of the destination.
   */
  destinationIpAddress: string;
}

export const ForwardedRequestContextSchema: TypedSchema<ForwardedRequestContext> = typed<ForwardedRequestContext>(object({
  destinationDuration: number(),
  destinationIpAddress: string(),
}));