import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostAccountsAccountPeopleRequestAdditionalTosAcceptances } from './PostAccountsAccountPeopleRequestAdditionalTosAcceptances';
import { PostAccountsAccountPeopleRequestAdditionalTosAcceptancesSchema } from './PostAccountsAccountPeopleRequestAdditionalTosAcceptances';
import type { PostAccountsAccountPeopleRequestAddress } from './PostAccountsAccountPeopleRequestAddress';
import { PostAccountsAccountPeopleRequestAddressSchema } from './PostAccountsAccountPeopleRequestAddress';
import type { PostAccountsAccountPeopleRequestAddressKana } from './PostAccountsAccountPeopleRequestAddressKana';
import { PostAccountsAccountPeopleRequestAddressKanaSchema } from './PostAccountsAccountPeopleRequestAddressKana';
import type { PostAccountsAccountPeopleRequestAddressKanji } from './PostAccountsAccountPeopleRequestAddressKanji';
import { PostAccountsAccountPeopleRequestAddressKanjiSchema } from './PostAccountsAccountPeopleRequestAddressKanji';
import type { PostAccountsAccountPeopleRequestDob } from './PostAccountsAccountPeopleRequestDob';
import { PostAccountsAccountPeopleRequestDobSchema } from './PostAccountsAccountPeopleRequestDob';
import type { PostAccountsAccountPeopleRequestDocuments } from './PostAccountsAccountPeopleRequestDocuments';
import { PostAccountsAccountPeopleRequestDocumentsSchema } from './PostAccountsAccountPeopleRequestDocuments';
import type { PostAccountsAccountPeopleRequestFullNameAliases } from './PostAccountsAccountPeopleRequestFullNameAliases';
import { PostAccountsAccountPeopleRequestFullNameAliasesSchema } from './PostAccountsAccountPeopleRequestFullNameAliases';
import type { PostAccountsAccountPeopleRequestRegisteredAddress } from './PostAccountsAccountPeopleRequestRegisteredAddress';
import { PostAccountsAccountPeopleRequestRegisteredAddressSchema } from './PostAccountsAccountPeopleRequestRegisteredAddress';
import type { PostAccountsAccountPeopleRequestRelationship } from './PostAccountsAccountPeopleRequestRelationship';
import { PostAccountsAccountPeopleRequestRelationshipSchema } from './PostAccountsAccountPeopleRequestRelationship';
import type { PostAccountsAccountPeopleRequestUsCfpbData } from './PostAccountsAccountPeopleRequestUsCfpbData';
import { PostAccountsAccountPeopleRequestUsCfpbDataSchema } from './PostAccountsAccountPeopleRequestUsCfpbData';
import type { PostAccountsAccountPeopleRequestVerification } from './PostAccountsAccountPeopleRequestVerification';
import { PostAccountsAccountPeopleRequestVerificationSchema } from './PostAccountsAccountPeopleRequestVerification';
export interface PostAccountsAccountPeopleRequest {
  /**
   * person_additional_tos_acceptances_specs
   *
   * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
   */
  additionalTosAcceptances?: PostAccountsAccountPeopleRequestAdditionalTosAcceptances;
  /**
   * legal_entity_and_kyc_address_specs
   *
   * The person's address.
   */
  address?: PostAccountsAccountPeopleRequestAddress;
  /**
   * japan_address_kana_specs
   *
   * The Kana variation of the person's address (Japan only).
   */
  addressKana?: PostAccountsAccountPeopleRequestAddressKana;
  /**
   * japan_address_kanji_specs
   *
   * The Kanji variation of the person's address (Japan only).
   */
  addressKanji?: PostAccountsAccountPeopleRequestAddressKanji;
  /**
   * The person's date of birth.
   */
  dob?: PostAccountsAccountPeopleRequestDob;
  /**
   * person_documents_specs
   *
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: PostAccountsAccountPeopleRequestDocuments;
  /**
   * The person's email address.
   */
  email?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The person's first name.
   */
  firstName?: string;
  /**
   * The Kana variation of the person's first name (Japan only).
   */
  firstNameKana?: string;
  /**
   * The Kanji variation of the person's first name (Japan only).
   */
  firstNameKanji?: string;
  /**
   * A list of alternate names or aliases that the person is known by.
   */
  fullNameAliases?: PostAccountsAccountPeopleRequestFullNameAliases;
  /**
   * The person's gender (International regulations require either "male" or "female").
   */
  gender?: string;
  /**
   * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumber?: string;
  /**
   * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumberSecondary?: string;
  /**
   * The person's last name.
   */
  lastName?: string;
  /**
   * The Kana variation of the person's last name (Japan only).
   */
  lastNameKana?: string;
  /**
   * The Kanji variation of the person's last name (Japan only).
   */
  lastNameKanji?: string;
  /**
   * The person's maiden name.
   */
  maidenName?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
   */
  nationality?: string;
  /**
   * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
   */
  personToken?: string;
  /**
   * The person's phone number.
   */
  phone?: string;
  /**
   * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
   */
  politicalExposure?: string;
  /**
   * address_specs
   *
   * The person's registered address.
   */
  registeredAddress?: PostAccountsAccountPeopleRequestRegisteredAddress;
  /**
   * relationship_specs
   *
   * The relationship that this person has with the account's legal entity.
   */
  relationship?: PostAccountsAccountPeopleRequestRelationship;
  /**
   * The last four digits of the person's Social Security number (U.S. only).
   */
  ssnLast4?: string;
  /**
   * us_cfpb_data_specs
   *
   * Demographic data related to the person.
   */
  usCfpbData?: PostAccountsAccountPeopleRequestUsCfpbData;
  /**
   * person_verification_specs
   *
   * The person's verification status.
   */
  verification?: PostAccountsAccountPeopleRequestVerification;
}

export const PostAccountsAccountPeopleRequestSchema: TypedSchema<PostAccountsAccountPeopleRequest> = typed<PostAccountsAccountPeopleRequest>(object({
  get additionalTosAcceptances() { return optional(PostAccountsAccountPeopleRequestAdditionalTosAcceptancesSchema) },
  get address() { return optional(PostAccountsAccountPeopleRequestAddressSchema) },
  get addressKana() { return optional(PostAccountsAccountPeopleRequestAddressKanaSchema) },
  get addressKanji() { return optional(PostAccountsAccountPeopleRequestAddressKanjiSchema) },
  get dob() { return optional(PostAccountsAccountPeopleRequestDobSchema) },
  get documents() { return optional(PostAccountsAccountPeopleRequestDocumentsSchema) },
  email: optional(string()),
  expand: optional(array(string())),
  firstName: optional(string()),
  firstNameKana: optional(string()),
  firstNameKanji: optional(string()),
  get fullNameAliases() { return optional(PostAccountsAccountPeopleRequestFullNameAliasesSchema) },
  gender: optional(string()),
  idNumber: optional(string()),
  idNumberSecondary: optional(string()),
  lastName: optional(string()),
  lastNameKana: optional(string()),
  lastNameKanji: optional(string()),
  maidenName: optional(string()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  nationality: optional(string()),
  personToken: optional(string()),
  phone: optional(string()),
  politicalExposure: optional(string()),
  get registeredAddress() { return optional(PostAccountsAccountPeopleRequestRegisteredAddressSchema) },
  get relationship() { return optional(PostAccountsAccountPeopleRequestRelationshipSchema) },
  ssnLast4: optional(string()),
  get usCfpbData() { return optional(PostAccountsAccountPeopleRequestUsCfpbDataSchema) },
  get verification() { return optional(PostAccountsAccountPeopleRequestVerificationSchema) },
}));