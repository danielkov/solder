import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsRequestProvinceStandard } from './PostTaxRegistrationsRequestProvinceStandard';
import { PostTaxRegistrationsRequestProvinceStandardSchema } from './PostTaxRegistrationsRequestProvinceStandard';
/**
 * canada
 */
export interface PostTaxRegistrationsRequestCa {
  /**
   * province_standard
   */
  provinceStandard?: PostTaxRegistrationsRequestProvinceStandard;
  type: string;
}

export const PostTaxRegistrationsRequestCaSchema: TypedSchema<PostTaxRegistrationsRequestCa> = typed<PostTaxRegistrationsRequestCa>(object({
  get provinceStandard() { return optional(PostTaxRegistrationsRequestProvinceStandardSchema) },
  type: string(),
}));