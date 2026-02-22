import { number, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Per-request token limits
 */
export interface PerRequestLimits {
  /**
   * Maximum completion tokens per request
   */
  completionTokens: number;
  /**
   * Maximum prompt tokens per request
   */
  promptTokens: number;
}

export const PerRequestLimitsSchema: TypedSchema<PerRequestLimits> = typed<PerRequestLimits>(object({ completionTokens: number(), promptTokens: number() }));
