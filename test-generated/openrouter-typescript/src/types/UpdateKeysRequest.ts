import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface UpdateKeysRequest {
  /**
   * Whether to disable the API key
   */
  disabled?: boolean;
  /**
   * Whether to include BYOK usage in the limit
   */
  includeByokInLimit?: boolean;
  /**
   * New spending limit for the API key in USD
   */
  limit?: number;
  /**
   * New limit reset type for the API key (daily, weekly, monthly, or null for no reset). Resets happen automatically at midnight UTC, and weeks are Monday through Sunday.
   */
  limitReset?: string;
  /**
   * New name for the API key
   */
  name?: string;
}

export const UpdateKeysRequestSchema: TypedSchema<UpdateKeysRequest> = typed<UpdateKeysRequest>(object({
  disabled: optional(boolean()),
  includeByokInLimit: optional(boolean()),
  limit: optional(number()),
  limitReset: optional(string()),
  name: optional(string()),
}));