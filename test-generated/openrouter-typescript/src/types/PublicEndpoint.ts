import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { EndpointStatus } from './EndpointStatus';
import { EndpointStatusSchema } from './EndpointStatus';
import type { Parameter } from './Parameter';
import { ParameterSchema } from './Parameter';
import type { PricingProperty } from './PricingProperty';
import { PricingPropertySchema } from './PricingProperty';
import type { ProviderName } from './ProviderName';
import { ProviderNameSchema } from './ProviderName';
import type { QuantizationUnion } from './QuantizationUnion';
import { QuantizationUnionSchema } from './QuantizationUnion';
/**
 * Information about a specific model endpoint
 */
export interface PublicEndpoint {
  contextLength: number;
  maxCompletionTokens: number;
  maxPromptTokens: number;
  modelName: string;
  name: string;
  pricing: PricingProperty;
  providerName: ProviderName;
  quantization: QuantizationUnion;
  status?: EndpointStatus;
  supportedParameters: Array<Parameter>;
  supportsImplicitCaching: boolean;
  tag: string;
  uptimeLast30m: number;
}

export const PublicEndpointSchema: TypedSchema<PublicEndpoint> = typed<PublicEndpoint>(object({
  contextLength: number(),
  maxCompletionTokens: number(),
  maxPromptTokens: number(),
  modelName: string(),
  name: string(),
  pricing: PricingPropertySchema,
  providerName: ProviderNameSchema,
  quantization: QuantizationUnionSchema,
  get status() { return optional(EndpointStatusSchema) },
  supportedParameters: array(ParameterSchema),
  supportsImplicitCaching: boolean(),
  tag: string(),
  uptimeLast30m: number(),
}));