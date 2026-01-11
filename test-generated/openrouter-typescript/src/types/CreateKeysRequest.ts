import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface CreateKeysRequest {
  /**
   * Optional ISO 8601 UTC timestamp when the API key should expire. Must be UTC, other timezones will be rejected
   */
  expiresAt?: string;
  /**
   * Whether to include BYOK usage in the limit
   */
  includeByokInLimit?: boolean;
  /**
   * Optional spending limit for the API key in USD
   */
  limit?: number;
  /**
   * Type of limit reset for the API key (daily, weekly, monthly, or null for no reset). Resets happen automatically at midnight UTC, and weeks are Monday through Sunday.
   */
  limitReset?: string;
  /**
   * Name for the new API key
   */
  name: string;
}

export const CreateKeysRequestSchema: TypedSchema<CreateKeysRequest> = typed<CreateKeysRequest>(object({
  expiresAt: optional(string()),
  includeByokInLimit: optional(boolean()),
  limit: optional(number()),
  limitReset: optional(string()),
  name: string(),
}));