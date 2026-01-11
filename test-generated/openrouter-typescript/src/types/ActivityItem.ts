import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface ActivityItem {
  /**
   * BYOK inference cost in USD (external credits spent)
   */
  byokUsageInference: number;
  /**
   * Total completion tokens generated
   */
  completionTokens: number;
  /**
   * Date of the activity (YYYY-MM-DD format)
   */
  date: string;
  /**
   * Unique identifier for the endpoint
   */
  endpointId: string;
  /**
   * Model slug (e.g., "openai/gpt-4.1")
   */
  model: string;
  /**
   * Model permaslug (e.g., "openai/gpt-4.1-2025-04-14")
   */
  modelPermaslug: string;
  /**
   * Total prompt tokens used
   */
  promptTokens: number;
  /**
   * Name of the provider serving this endpoint
   */
  providerName: string;
  /**
   * Total reasoning tokens used
   */
  reasoningTokens: number;
  /**
   * Number of requests made
   */
  requests: number;
  /**
   * Total cost in USD (OpenRouter credits spent)
   */
  usage: number;
}

export const ActivityItemSchema: TypedSchema<ActivityItem> = typed<ActivityItem>(object({
  byokUsageInference: number(),
  completionTokens: number(),
  date: string(),
  endpointId: string(),
  model: string(),
  modelPermaslug: string(),
  promptTokens: number(),
  providerName: string(),
  reasoningTokens: number(),
  requests: number(),
  usage: number(),
}));