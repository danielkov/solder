import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDobObject } from './PostAccountsRequestDobObject';
import { PostAccountsRequestDobObjectSchema } from './PostAccountsRequestDobObject';
import type { PostIssuingCardholdersRequestCardIssuing } from './PostIssuingCardholdersRequestCardIssuing';
import { PostIssuingCardholdersRequestCardIssuingSchema } from './PostIssuingCardholdersRequestCardIssuing';
import type { PostIssuingCardholdersRequestVerification } from './PostIssuingCardholdersRequestVerification';
import { PostIssuingCardholdersRequestVerificationSchema } from './PostIssuingCardholdersRequestVerification';
/**
 * individual_param
 *
 * Additional information about an `individual` cardholder.
 */
export interface PostIssuingCardholdersRequestIndividual {
  /**
   * card_issuing_param
   */
  cardIssuing?: PostIssuingCardholdersRequestCardIssuing;
  /**
   * date_of_birth_specs
   */
  dob?: PostAccountsRequestDobObject;
  firstName?: string;
  lastName?: string;
  /**
   * person_verification_param
   */
  verification?: PostIssuingCardholdersRequestVerification;
}

export const PostIssuingCardholdersRequestIndividualSchema: TypedSchema<PostIssuingCardholdersRequestIndividual> = typed<PostIssuingCardholdersRequestIndividual>(object({
  get cardIssuing() { return optional(PostIssuingCardholdersRequestCardIssuingSchema) },
  get dob() { return optional(PostAccountsRequestDobObjectSchema) },
  firstName: optional(string()),
  lastName: optional(string()),
  get verification() { return optional(PostIssuingCardholdersRequestVerificationSchema) },
}));