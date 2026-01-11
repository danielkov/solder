import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * address_validation_param
 */
export interface PostIssuingCardsRequestAddressValidation {
  mode: string;
}

export const PostIssuingCardsRequestAddressValidationSchema: TypedSchema<PostIssuingCardsRequestAddressValidation> = typed<PostIssuingCardsRequestAddressValidation>(object({
  mode: string(),
}));