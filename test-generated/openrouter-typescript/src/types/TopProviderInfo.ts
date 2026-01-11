import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * Information about the top provider for this model
 */
export interface TopProviderInfo {
  /**
   * Context length from the top provider
   */
  contextLength?: number;
  /**
   * Whether the top provider moderates content
   */
  isModerated: boolean;
  /**
   * Maximum completion tokens from the top provider
   */
  maxCompletionTokens?: number;
}

export const TopProviderInfoSchema: TypedSchema<TopProviderInfo> = typed<TopProviderInfo>(object({
  contextLength: optional(number()),
  isModerated: boolean(),
  maxCompletionTokens: optional(number()),
}));