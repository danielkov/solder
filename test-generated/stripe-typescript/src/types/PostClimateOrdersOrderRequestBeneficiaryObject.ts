import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * beneficiary_params
 */
export interface PostClimateOrdersOrderRequestBeneficiaryObject {
  publicName: PostAccountsRequestPaymentsPricing;
}

export const PostClimateOrdersOrderRequestBeneficiaryObjectSchema: TypedSchema<PostClimateOrdersOrderRequestBeneficiaryObject> = typed<PostClimateOrdersOrderRequestBeneficiaryObject>(object({
  publicName: PostAccountsRequestPaymentsPricingSchema,
}));