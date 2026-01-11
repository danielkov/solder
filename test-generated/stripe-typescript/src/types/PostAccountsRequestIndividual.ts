import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestVerification } from './DefaultPostAccountsRequestVerification';
import { DefaultPostAccountsRequestVerificationSchema } from './DefaultPostAccountsRequestVerification';
import type { PostAccountsRequestAddressKana } from './PostAccountsRequestAddressKana';
import { PostAccountsRequestAddressKanaSchema } from './PostAccountsRequestAddressKana';
import type { PostAccountsRequestAddressKanji } from './PostAccountsRequestAddressKanji';
import { PostAccountsRequestAddressKanjiSchema } from './PostAccountsRequestAddressKanji';
import type { PostAccountsRequestDob } from './PostAccountsRequestDob';
import { PostAccountsRequestDobSchema } from './PostAccountsRequestDob';
import type { PostAccountsRequestFullNameAliases } from './PostAccountsRequestFullNameAliases';
import { PostAccountsRequestFullNameAliasesSchema } from './PostAccountsRequestFullNameAliases';
import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostAccountsRequestRelationship } from './PostAccountsRequestRelationship';
import { PostAccountsRequestRelationshipSchema } from './PostAccountsRequestRelationship';
import type { PostAccountsRequestSupportAddress } from './PostAccountsRequestSupportAddress';
import { PostAccountsRequestSupportAddressSchema } from './PostAccountsRequestSupportAddress';
/**
 * individual_specs
 *
 * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
 */
export interface PostAccountsRequestIndividual {
  /**
   * address_specs
   */
  address?: PostAccountsRequestSupportAddress;
  /**
   * japan_address_kana_specs
   */
  addressKana?: PostAccountsRequestAddressKana;
  /**
   * japan_address_kanji_specs
   */
  addressKanji?: PostAccountsRequestAddressKanji;
  dob?: PostAccountsRequestDob;
  email?: string;
  firstName?: string;
  firstNameKana?: string;
  firstNameKanji?: string;
  fullNameAliases?: PostAccountsRequestFullNameAliases;
  gender?: string;
  idNumber?: string;
  idNumberSecondary?: string;
  lastName?: string;
  lastNameKana?: string;
  lastNameKanji?: string;
  maidenName?: string;
  metadata?: PostAccountsRequestMetadata;
  phone?: string;
  politicalExposure?: string;
  /**
   * address_specs
   */
  registeredAddress?: PostAccountsRequestSupportAddress;
  /**
   * individual_relationship_specs
   */
  relationship?: PostAccountsRequestRelationship;
  ssnLast4?: string;
  /**
   * person_verification_specs
   */
  verification?: DefaultPostAccountsRequestVerification;
}

export const PostAccountsRequestIndividualSchema: TypedSchema<PostAccountsRequestIndividual> = typed<PostAccountsRequestIndividual>(object({
  get address() { return optional(PostAccountsRequestSupportAddressSchema) },
  get addressKana() { return optional(PostAccountsRequestAddressKanaSchema) },
  get addressKanji() { return optional(PostAccountsRequestAddressKanjiSchema) },
  get dob() { return optional(PostAccountsRequestDobSchema) },
  email: optional(string()),
  firstName: optional(string()),
  firstNameKana: optional(string()),
  firstNameKanji: optional(string()),
  get fullNameAliases() { return optional(PostAccountsRequestFullNameAliasesSchema) },
  gender: optional(string()),
  idNumber: optional(string()),
  idNumberSecondary: optional(string()),
  lastName: optional(string()),
  lastNameKana: optional(string()),
  lastNameKanji: optional(string()),
  maidenName: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  phone: optional(string()),
  politicalExposure: optional(string()),
  get registeredAddress() { return optional(PostAccountsRequestSupportAddressSchema) },
  get relationship() { return optional(PostAccountsRequestRelationshipSchema) },
  ssnLast4: optional(string()),
  get verification() { return optional(DefaultPostAccountsRequestVerificationSchema) },
}));