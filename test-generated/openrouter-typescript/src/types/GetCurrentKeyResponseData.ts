import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GetCurrentKeyResponseRateLimit } from './GetCurrentKeyResponseRateLimit';
import { GetCurrentKeyResponseRateLimitSchema } from './GetCurrentKeyResponseRateLimit';
/**
 * Current API key information
 */
export interface GetCurrentKeyResponseData {
  /**
   * Total external BYOK usage (in USD) for the API key
   */
  byokUsage: number;
  /**
   * External BYOK usage (in USD) for the current UTC day
   */
  byokUsageDaily: number;
  /**
   * External BYOK usage (in USD) for current UTC month
   */
  byokUsageMonthly: number;
  /**
   * External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
   */
  byokUsageWeekly: number;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
  /**
   * Whether this is a free tier API key
   */
  isFreeTier: boolean;
  /**
   * Whether this is a provisioning key
   */
  isProvisioningKey: boolean;
  /**
   * Human-readable label for the API key
   */
  label: string;
  /**
   * Spending limit for the API key in USD
   */
  limit: number;
  /**
   * Remaining spending limit in USD
   */
  limitRemaining: number;
  /**
   * Type of limit reset for the API key
   */
  limitReset: string;
  /**
   * Legacy rate limit information about a key. Will always return -1.
   */
  rateLimit: GetCurrentKeyResponseRateLimit;
  /**
   * Total OpenRouter credit usage (in USD) for the API key
   */
  usage: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC day
   */
  usageDaily: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC month
   */
  usageMonthly: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)
   */
  usageWeekly: number;
}

export const GetCurrentKeyResponseDataSchema: TypedSchema<GetCurrentKeyResponseData> = typed<GetCurrentKeyResponseData>(object({
  byokUsage: number(),
  byokUsageDaily: number(),
  byokUsageMonthly: number(),
  byokUsageWeekly: number(),
  expiresAt: optional(string()),
  includeByokInLimit: boolean(),
  isFreeTier: boolean(),
  isProvisioningKey: boolean(),
  label: string(),
  limit: number(),
  limitRemaining: number(),
  limitReset: string(),
  rateLimit: GetCurrentKeyResponseRateLimitSchema,
  usage: number(),
  usageDaily: number(),
  usageMonthly: number(),
  usageWeekly: number(),
}));