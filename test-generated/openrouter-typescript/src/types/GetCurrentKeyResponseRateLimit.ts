import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Legacy rate limit information about a key. Will always return -1.
 */
export interface GetCurrentKeyResponseRateLimit {
  /**
   * Rate limit interval
   */
  interval: string;
  /**
   * Note about the rate limit
   */
  note: string;
  /**
   * Number of requests allowed per interval
   */
  requests: number;
}

export const GetCurrentKeyResponseRateLimitSchema: TypedSchema<GetCurrentKeyResponseRateLimit> = typed<GetCurrentKeyResponseRateLimit>(object({
  interval: string(),
  note: string(),
  requests: number(),
}));