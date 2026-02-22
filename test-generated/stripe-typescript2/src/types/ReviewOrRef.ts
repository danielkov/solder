import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Review } from './Review';
import { ReviewSchema } from './Review';
/**
 * ID of the review associated with this charge if one exists.
 */
export type ReviewOrRef = string | Review;

export const ReviewOrRefSchema: TypedSchema<ReviewOrRef> = typed<ReviewOrRef>(union(string(), ReviewSchema));
