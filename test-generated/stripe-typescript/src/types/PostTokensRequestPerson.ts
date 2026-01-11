import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestVerification } from './DefaultPostAccountsRequestVerification';
import { DefaultPostAccountsRequestVerificationSchema } from './DefaultPostAccountsRequestVerification';
import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestAddress } from './PostAccountsRequestAddress';
import { PostAccountsRequestAddressSchema } from './PostAccountsRequestAddress';
import type { PostAccountsRequestAddressKana } from './PostAccountsRequestAddressKana';
import { PostAccountsRequestAddressKanaSchema } from './PostAccountsRequestAddressKana';
import type { PostAccountsRequestAddressKanji } from './PostAccountsRequestAddressKanji';
import { PostAccountsRequestAddressKanjiSchema } from './PostAccountsRequestAddressKanji';
import type { PostAccountsRequestDob } from './PostAccountsRequestDob';
import { PostAccountsRequestDobSchema } from './PostAccountsRequestDob';
import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostAccountsRequestSupportAddress } from './PostAccountsRequestSupportAddress';
import { PostAccountsRequestSupportAddressSchema } from './PostAccountsRequestSupportAddress';
import type { PostTokensRequestAdditionalTosAcceptances } from './PostTokensRequestAdditionalTosAcceptances';
import { PostTokensRequestAdditionalTosAcceptancesSchema } from './PostTokensRequestAdditionalTosAcceptances';
import type { PostTokensRequestDocuments } from './PostTokensRequestDocuments';
import { PostTokensRequestDocumentsSchema } from './PostTokensRequestDocuments';
import type { PostTokensRequestRelationship } from './PostTokensRequestRelationship';
import { PostTokensRequestRelationshipSchema } from './PostTokensRequestRelationship';
import type { PostTokensRequestUsCfpbData } from './PostTokensRequestUsCfpbData';
import { PostTokensRequestUsCfpbDataSchema } from './PostTokensRequestUsCfpbData';
/**
 * person_token_specs
 *
 * Information for the person this token represents.
 */
export interface PostTokensRequestPerson {
  /**
   * person_additional_tos_acceptances_specs
   */
  additionalTosAcceptances?: PostTokensRequestAdditionalTosAcceptances;
  /**
   * legal_entity_and_kyc_address_specs
   */
  address?: PostAccountsRequestAddress;
  /**
   * japan_address_kana_specs
   */
  addressKana?: PostAccountsRequestAddressKana;
  /**
   * japan_address_kanji_specs
   */
  addressKanji?: PostAccountsRequestAddressKanji;
  dob?: PostAccountsRequestDob;
  /**
   * person_documents_specs
   */
  documents?: PostTokensRequestDocuments;
  email?: string;
  firstName?: string;
  firstNameKana?: string;
  firstNameKanji?: string;
  fullNameAliases?: PostAccountsAccountRequestDefaultAccountTaxIds;
  gender?: string;
  idNumber?: string;
  idNumberSecondary?: string;
  lastName?: string;
  lastNameKana?: string;
  lastNameKanji?: string;
  maidenName?: string;
  metadata?: PostAccountsRequestMetadata;
  nationality?: string;
  phone?: string;
  politicalExposure?: string;
  /**
   * address_specs
   */
  registeredAddress?: PostAccountsRequestSupportAddress;
  /**
   * relationship_specs
   */
  relationship?: PostTokensRequestRelationship;
  ssnLast4?: string;
  /**
   * us_cfpb_data_specs
   */
  usCfpbData?: PostTokensRequestUsCfpbData;
  /**
   * person_verification_specs
   */
  verification?: DefaultPostAccountsRequestVerification;
}

export const PostTokensRequestPersonSchema: TypedSchema<PostTokensRequestPerson> = typed<PostTokensRequestPerson>(object({
  get additionalTosAcceptances() { return optional(PostTokensRequestAdditionalTosAcceptancesSchema) },
  get address() { return optional(PostAccountsRequestAddressSchema) },
  get addressKana() { return optional(PostAccountsRequestAddressKanaSchema) },
  get addressKanji() { return optional(PostAccountsRequestAddressKanjiSchema) },
  get dob() { return optional(PostAccountsRequestDobSchema) },
  get documents() { return optional(PostTokensRequestDocumentsSchema) },
  email: optional(string()),
  firstName: optional(string()),
  firstNameKana: optional(string()),
  firstNameKanji: optional(string()),
  get fullNameAliases() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  gender: optional(string()),
  idNumber: optional(string()),
  idNumberSecondary: optional(string()),
  lastName: optional(string()),
  lastNameKana: optional(string()),
  lastNameKanji: optional(string()),
  maidenName: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  nationality: optional(string()),
  phone: optional(string()),
  politicalExposure: optional(string()),
  get registeredAddress() { return optional(PostAccountsRequestSupportAddressSchema) },
  get relationship() { return optional(PostTokensRequestRelationshipSchema) },
  ssnLast4: optional(string()),
  get usCfpbData() { return optional(PostTokensRequestUsCfpbDataSchema) },
  get verification() { return optional(DefaultPostAccountsRequestVerificationSchema) },
}));