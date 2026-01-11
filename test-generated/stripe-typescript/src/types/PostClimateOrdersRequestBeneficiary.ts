import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * beneficiary_params
 *
 * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
 */
export interface PostClimateOrdersRequestBeneficiary {
  publicName: string;
}

export const PostClimateOrdersRequestBeneficiarySchema: TypedSchema<PostClimateOrdersRequestBeneficiary> = typed<PostClimateOrdersRequestBeneficiary>(object({
  publicName: string(),
}));