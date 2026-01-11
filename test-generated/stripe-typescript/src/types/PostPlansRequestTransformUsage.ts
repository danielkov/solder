import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * transform_usage_param
 *
 * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
 */
export interface PostPlansRequestTransformUsage {
  divideBy: number;
  round: string;
}

export const PostPlansRequestTransformUsageSchema: TypedSchema<PostPlansRequestTransformUsage> = typed<PostPlansRequestTransformUsage>(object({
  divideBy: number(),
  round: string(),
}));