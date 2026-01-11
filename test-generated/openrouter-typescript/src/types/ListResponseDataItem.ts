import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface ListResponseDataItem {
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
   * ISO 8601 timestamp of when the API key was created
   */
  createdAt: string;
  /**
   * Whether the API key is disabled
   */
  disabled: boolean;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Unique hash identifier for the API key
   */
  hash: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
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
   * Name of the API key
   */
  name: string;
  /**
   * ISO 8601 timestamp of when the API key was last updated
   */
  updatedAt: string;
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

export const ListResponseDataItemSchema: TypedSchema<ListResponseDataItem> = typed<ListResponseDataItem>(object({
  byokUsage: number(),
  byokUsageDaily: number(),
  byokUsageMonthly: number(),
  byokUsageWeekly: number(),
  createdAt: string(),
  disabled: boolean(),
  expiresAt: optional(string()),
  hash: string(),
  includeByokInLimit: boolean(),
  label: string(),
  limit: number(),
  limitRemaining: number(),
  limitReset: string(),
  name: string(),
  updatedAt: string(),
  usage: number(),
  usageDaily: number(),
  usageMonthly: number(),
  usageWeekly: number(),
}));