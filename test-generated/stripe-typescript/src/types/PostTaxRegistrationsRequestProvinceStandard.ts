import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * province_standard
 */
export interface PostTaxRegistrationsRequestProvinceStandard {
  province: string;
}

export const PostTaxRegistrationsRequestProvinceStandardSchema: TypedSchema<PostTaxRegistrationsRequestProvinceStandard> = typed<PostTaxRegistrationsRequestProvinceStandard>(object({
  province: string(),
}));