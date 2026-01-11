import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultParameters } from './DefaultParameters';
import { DefaultParametersSchema } from './DefaultParameters';
import type { ModelArchitecture } from './ModelArchitecture';
import { ModelArchitectureSchema } from './ModelArchitecture';
import type { Parameter } from './Parameter';
import { ParameterSchema } from './Parameter';
import type { PerRequestLimits } from './PerRequestLimits';
import { PerRequestLimitsSchema } from './PerRequestLimits';
import type { PublicPricing } from './PublicPricing';
import { PublicPricingSchema } from './PublicPricing';
import type { TopProviderInfo } from './TopProviderInfo';
import { TopProviderInfoSchema } from './TopProviderInfo';
/**
 * Information about an AI model available on OpenRouter
 */
export interface Model {
  /**
   * Model architecture information
   */
  architecture: ModelArchitecture;
  /**
   * Canonical slug for the model
   */
  canonicalSlug: string;
  /**
   * Maximum context length in tokens
   */
  contextLength: number;
  /**
   * Unix timestamp of when the model was created
   */
  created: number;
  /**
   * Default parameters for this model
   */
  defaultParameters: DefaultParameters;
  /**
   * Description of the model
   */
  description?: string;
  /**
   * Hugging Face model identifier, if applicable
   */
  huggingFaceId?: string;
  /**
   * Unique identifier for the model
   */
  id: string;
  /**
   * Display name of the model
   */
  name: string;
  /**
   * Per-request token limits
   */
  perRequestLimits: PerRequestLimits;
  /**
   * Pricing information for the model
   */
  pricing: PublicPricing;
  /**
   * List of supported parameters for this model
   */
  supportedParameters: Array<Parameter>;
  /**
   * Information about the top provider for this model
   */
  topProvider: TopProviderInfo;
}

export const ModelSchema: TypedSchema<Model> = typed<Model>(object({
  architecture: ModelArchitectureSchema,
  canonicalSlug: string(),
  contextLength: number(),
  created: number(),
  defaultParameters: DefaultParametersSchema,
  description: optional(string()),
  huggingFaceId: optional(string()),
  id: string(),
  name: string(),
  perRequestLimits: PerRequestLimitsSchema,
  pricing: PublicPricingSchema,
  supportedParameters: array(ParameterSchema),
  topProvider: TopProviderInfoSchema,
}));