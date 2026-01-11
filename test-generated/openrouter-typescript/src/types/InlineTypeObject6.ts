import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
export interface InlineTypeObject6 {
  upstreamInferenceCost?: number;
  upstreamInferenceInputCost: number;
  upstreamInferenceOutputCost: number;
}

export const InlineTypeObject6Schema: TypedSchema<InlineTypeObject6> = typed<InlineTypeObject6>(object({
  upstreamInferenceCost: optional(number()),
  upstreamInferenceInputCost: number(),
  upstreamInferenceOutputCost: number(),
}));