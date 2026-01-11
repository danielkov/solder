import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * RadarReviewResourceSession
 *
 * 
 */
export interface RadarReviewResourceSession {
  /**
   * The browser used in this browser session (e.g., `Chrome`).
   */
  browser?: string;
  /**
   * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
   */
  device?: string;
  /**
   * The platform for the browser session (e.g., `Macintosh`).
   */
  platform?: string;
  /**
   * The version for the browser session (e.g., `61.0.3163.100`).
   */
  version?: string;
}

export const RadarReviewResourceSessionSchema: TypedSchema<RadarReviewResourceSession> = typed<RadarReviewResourceSession>(object({
  browser: optional(string()),
  device: optional(string()),
  platform: optional(string()),
  version: optional(string()),
}));