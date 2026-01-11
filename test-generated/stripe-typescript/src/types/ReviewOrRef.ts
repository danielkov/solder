import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Review } from './Review';
import { ReviewSchema } from './Review';
export type ReviewOrRef = string | Review;

export const ReviewOrRefSchema: TypedSchema<ReviewOrRef> = typed<ReviewOrRef>(union(string(), ReviewSchema));