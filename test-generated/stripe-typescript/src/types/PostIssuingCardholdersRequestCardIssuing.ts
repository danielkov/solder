import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostIssuingCardholdersRequestUserTermsAcceptance } from './PostIssuingCardholdersRequestUserTermsAcceptance';
import { PostIssuingCardholdersRequestUserTermsAcceptanceSchema } from './PostIssuingCardholdersRequestUserTermsAcceptance';
/**
 * card_issuing_param
 */
export interface PostIssuingCardholdersRequestCardIssuing {
  /**
   * terms_acceptance_param
   */
  userTermsAcceptance?: PostIssuingCardholdersRequestUserTermsAcceptance;
}

export const PostIssuingCardholdersRequestCardIssuingSchema: TypedSchema<PostIssuingCardholdersRequestCardIssuing> = typed<PostIssuingCardholdersRequestCardIssuing>(object({
  get userTermsAcceptance() { return optional(PostIssuingCardholdersRequestUserTermsAcceptanceSchema) },
}));