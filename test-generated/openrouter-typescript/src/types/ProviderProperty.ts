import { TypedSchema, array, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { DataCollection } from './DataCollection';
import { DataCollectionSchema } from './DataCollection';
import type { IgnoreItemOrRef } from './IgnoreItemOrRef';
import { IgnoreItemOrRefSchema } from './IgnoreItemOrRef';
import type { MaxPriceProperty } from './MaxPriceProperty';
import { MaxPricePropertySchema } from './MaxPriceProperty';
import type { ProviderSort } from './ProviderSort';
import { ProviderSortSchema } from './ProviderSort';
import type { Quantization } from './Quantization';
import { QuantizationSchema } from './Quantization';
/**
 * When multiple model providers are available, optionally indicate your routing preference.
 */
export interface ProviderProperty {
  /**
   * Whether to allow backup providers to serve requests
- true: (default) when the primary provider (or your custom providers in "order") is unavailable, use the next best provider.
- false: use only the primary/custom provider, and return the upstream error if it's unavailable.

   */
  allowFallbacks?: boolean;
  /**
   * Data collection setting. If no available model provider meets the requirement, your request will return an error.
- allow: (default) allow providers which store user data non-transiently and may train on it

- deny: use only providers which do not collect user data.
   */
  dataCollection?: DataCollection;
  /**
   * Whether to restrict routing to only models that allow text distillation. When true, only models where the author has allowed distillation will be used.
   */
  enforceDistillableText?: boolean;
  /**
   * List of provider slugs to ignore. If provided, this list is merged with your account-wide ignored provider settings for this request.
   */
  ignore?: Array<IgnoreItemOrRef>;
  /**
   * The object specifying the maximum price you want to pay for this request. USD price per million tokens, for prompt and completion.
   */
  maxPrice?: MaxPriceProperty;
  /**
   * List of provider slugs to allow. If provided, this list is merged with your account-wide allowed provider settings for this request.
   */
  only?: Array<IgnoreItemOrRef>;
  /**
   * An ordered list of provider slugs. The router will attempt to use the first provider in the subset of this list that supports your requested model, and fall back to the next if it is unavailable. If no providers are available, the request will fail with an error message.
   */
  order?: Array<IgnoreItemOrRef>;
  /**
   * A list of quantization levels to filter the provider by.
   */
  quantizations?: Array<Quantization>;
  /**
   * Whether to filter providers to only those that support the parameters you've provided. If this setting is omitted or set to false, then providers will receive only the parameters they support, and ignore the rest.
   */
  requireParameters?: boolean;
  /**
   * The sorting strategy to use for this request, if "order" is not specified. When set, no load balancing is performed.
   */
  sort?: ProviderSort;
  /**
   * Whether to restrict routing to only ZDR (Zero Data Retention) endpoints. When true, only endpoints that do not retain prompts will be used.
   */
  zdr?: boolean;
}

export const ProviderPropertySchema: TypedSchema<ProviderProperty> = typed<ProviderProperty>(object({
  allowFallbacks: optional(boolean()),
  get dataCollection() { return optional(DataCollectionSchema) },
  enforceDistillableText: optional(boolean()),
  get ignore() { return optional(array(IgnoreItemOrRefSchema)) },
  get maxPrice() { return optional(MaxPricePropertySchema) },
  get only() { return optional(array(IgnoreItemOrRefSchema)) },
  get order() { return optional(array(IgnoreItemOrRefSchema)) },
  get quantizations() { return optional(array(QuantizationSchema)) },
  requireParameters: optional(boolean()),
  get sort() { return optional(ProviderSortSchema) },
  zdr: optional(boolean()),
}));