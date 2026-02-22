import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostClimateOrdersOrderRequestBeneficiaryObject } from './PostClimateOrdersOrderRequestBeneficiaryObject';
import { PostClimateOrdersOrderRequestBeneficiaryObjectSchema } from './PostClimateOrdersOrderRequestBeneficiaryObject';
/**
 * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
 */
export type PostClimateOrdersOrderRequestBeneficiary = PostClimateOrdersOrderRequestBeneficiaryObject | string;

export const PostClimateOrdersOrderRequestBeneficiarySchema: TypedSchema<PostClimateOrdersOrderRequestBeneficiary> = typed<PostClimateOrdersOrderRequestBeneficiary>(union(PostClimateOrdersOrderRequestBeneficiaryObjectSchema, string()));
