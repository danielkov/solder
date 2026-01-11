import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { RatingDistribution } from './RatingDistribution';
import { RatingDistributionSchema } from './RatingDistribution';
export interface RatingSummary {
  distribution: RatingDistribution;
}

export const RatingSummarySchema: TypedSchema<RatingSummary> = typed<RatingSummary>(object({
  distribution: RatingDistributionSchema,
}));