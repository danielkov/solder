import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsRequestStandard } from './PostTaxRegistrationsRequestStandard';
import { PostTaxRegistrationsRequestStandardSchema } from './PostTaxRegistrationsRequestStandard';
/**
 * default
 */
export interface PostTaxRegistrationsRequestAe {
  /**
   * standard
   */
  standard?: PostTaxRegistrationsRequestStandard;
  type: string;
}

export const PostTaxRegistrationsRequestAeSchema: TypedSchema<PostTaxRegistrationsRequestAe> = typed<PostTaxRegistrationsRequestAe>(object({
  get standard() { return optional(PostTaxRegistrationsRequestStandardSchema) },
  type: string(),
}));