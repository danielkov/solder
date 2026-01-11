import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostClimateOrdersOrderRequestBeneficiaryObject } from './PostClimateOrdersOrderRequestBeneficiaryObject';
import { PostClimateOrdersOrderRequestBeneficiaryObjectSchema } from './PostClimateOrdersOrderRequestBeneficiaryObject';
export type PostClimateOrdersOrderRequestBeneficiary = PostClimateOrdersOrderRequestBeneficiaryObject | string;

export const PostClimateOrdersOrderRequestBeneficiarySchema: TypedSchema<PostClimateOrdersOrderRequestBeneficiary> = typed<PostClimateOrdersOrderRequestBeneficiary>(union(PostClimateOrdersOrderRequestBeneficiaryObjectSchema, string()));