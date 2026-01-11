import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxSettingsRequestDefaults } from './PostTaxSettingsRequestDefaults';
import { PostTaxSettingsRequestDefaultsSchema } from './PostTaxSettingsRequestDefaults';
import type { PostTaxSettingsRequestHeadOffice } from './PostTaxSettingsRequestHeadOffice';
import { PostTaxSettingsRequestHeadOfficeSchema } from './PostTaxSettingsRequestHeadOffice';
export interface PostTaxSettingsRequest {
  /**
   * defaults_param
   *
   * Default configuration to be used on Stripe Tax calculations.
   */
  defaults?: PostTaxSettingsRequestDefaults;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * head_office_param
   *
   * The place where your business is located.
   */
  headOffice?: PostTaxSettingsRequestHeadOffice;
}

export const PostTaxSettingsRequestSchema: TypedSchema<PostTaxSettingsRequest> = typed<PostTaxSettingsRequest>(object({
  get defaults() { return optional(PostTaxSettingsRequestDefaultsSchema) },
  expand: optional(array(string())),
  get headOffice() { return optional(PostTaxSettingsRequestHeadOfficeSchema) },
}));