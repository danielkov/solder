import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostTaxRegistrationsRequestStandard } from './DefaultPostTaxRegistrationsRequestStandard';
import { DefaultPostTaxRegistrationsRequestStandardSchema } from './DefaultPostTaxRegistrationsRequestStandard';
/**
 * europe
 */
export interface PostTaxRegistrationsRequestAt {
  /**
   * standard
   */
  standard?: DefaultPostTaxRegistrationsRequestStandard;
  type: string;
}

export const PostTaxRegistrationsRequestAtSchema: TypedSchema<PostTaxRegistrationsRequestAt> = typed<PostTaxRegistrationsRequestAt>(object({
  get standard() { return optional(DefaultPostTaxRegistrationsRequestStandardSchema) },
  type: string(),
}));