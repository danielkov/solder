import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostTaxSettingsRequestAddress } from './PostTaxSettingsRequestAddress';
import { PostTaxSettingsRequestAddressSchema } from './PostTaxSettingsRequestAddress';
/**
 * head_office_param
 *
 * The place where your business is located.
 */
export interface PostTaxSettingsRequestHeadOffice {
  /**
   * validated_country_address
   */
  address: PostTaxSettingsRequestAddress;
}

export const PostTaxSettingsRequestHeadOfficeSchema: TypedSchema<PostTaxSettingsRequestHeadOffice> = typed<PostTaxSettingsRequestHeadOffice>(object({
  address: PostTaxSettingsRequestAddressSchema,
}));