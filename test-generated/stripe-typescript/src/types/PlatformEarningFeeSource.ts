import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PlatformEarningFeeSource
 *
 * 
 */
export interface PlatformEarningFeeSource {
  /**
   * Charge ID that created this application fee.
   */
  charge?: string;
  /**
   * Payout ID that created this application fee.
   */
  payout?: string;
  /**
   * Type of object that created the application fee.
   */
  type: string;
}

export const PlatformEarningFeeSourceSchema: TypedSchema<PlatformEarningFeeSource> = typed<PlatformEarningFeeSource>(object({
  charge: optional(string()),
  payout: optional(string()),
  type: string(),
}));