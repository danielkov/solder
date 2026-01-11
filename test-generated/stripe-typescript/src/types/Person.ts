import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { LegalEntityDob } from './LegalEntityDob';
import { LegalEntityDobSchema } from './LegalEntityDob';
import type { LegalEntityJapanAddress } from './LegalEntityJapanAddress';
import { LegalEntityJapanAddressSchema } from './LegalEntityJapanAddress';
import type { LegalEntityPersonVerification } from './LegalEntityPersonVerification';
import { LegalEntityPersonVerificationSchema } from './LegalEntityPersonVerification';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PersonAdditionalTosAcceptances } from './PersonAdditionalTosAcceptances';
import { PersonAdditionalTosAcceptancesSchema } from './PersonAdditionalTosAcceptances';
import type { PersonFutureRequirements } from './PersonFutureRequirements';
import { PersonFutureRequirementsSchema } from './PersonFutureRequirements';
import type { PersonRelationship } from './PersonRelationship';
import { PersonRelationshipSchema } from './PersonRelationship';
import type { PersonRequirements } from './PersonRequirements';
import { PersonRequirementsSchema } from './PersonRequirements';
import type { PersonUsCfpbData } from './PersonUsCfpbData';
import { PersonUsCfpbDataSchema } from './PersonUsCfpbData';
/**
 * Person
 *
 * This is an object representing a person associated with a Stripe account.

A platform can only access a subset of data in a person for an account where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.

See the [Standard onboarding](/connect/standard-accounts) or [Express onboarding](/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](/connect/handling-api-verification#person-information).
 */
export interface Person {
  /**
   * The account the person is associated with.
   */
  account: string;
  /**
   * PersonAdditionalTOSAcceptances
   *
   * 
   */
  additionalTosAcceptances?: PersonAdditionalTosAcceptances;
  /**
   * Address
   *
   * 
   */
  address?: Address;
  addressKana?: LegalEntityJapanAddress;
  addressKanji?: LegalEntityJapanAddress;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * LegalEntityDOB
   *
   * 
   */
  dob?: LegalEntityDob;
  /**
   * The person's email address. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  email?: string;
  /**
   * The person's first name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  firstName?: string;
  /**
   * The Kana variation of the person's first name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  firstNameKana?: string;
  /**
   * The Kanji variation of the person's first name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  firstNameKanji?: string;
  /**
   * A list of alternate names or aliases that the person is known by. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  fullNameAliases?: Array<string>;
  futureRequirements?: PersonFutureRequirements;
  /**
   * The person's gender.
   */
  gender?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Whether the person's `id_number` was provided. True if either the full ID number was provided or if only the required part of the ID number was provided (ex. last four of an individual's SSN for the US indicated by `ssn_last_4_provided`).
   */
  idNumberProvided?: boolean;
  /**
   * Whether the person's `id_number_secondary` was provided.
   */
  idNumberSecondaryProvided?: boolean;
  /**
   * The person's last name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  lastName?: string;
  /**
   * The Kana variation of the person's last name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  lastNameKana?: string;
  /**
   * The Kanji variation of the person's last name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  lastNameKanji?: string;
  /**
   * The person's maiden name.
   */
  maidenName?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The country where the person is a national.
   */
  nationality?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The person's phone number.
   */
  phone?: string;
  /**
   * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
   */
  politicalExposure?: string;
  /**
   * Address
   *
   * 
   */
  registeredAddress?: Address;
  /**
   * PersonRelationship
   *
   * 
   */
  relationship?: PersonRelationship;
  requirements?: PersonRequirements;
  /**
   * Whether the last four digits of the person's Social Security number have been provided (U.S. only).
   */
  ssnLast4Provided?: boolean;
  /**
   * Demographic data related to the person.
   */
  usCfpbData?: PersonUsCfpbData;
  /**
   * LegalEntityPersonVerification
   *
   * 
   */
  verification?: LegalEntityPersonVerification;
}

export const PersonSchema: TypedSchema<Person> = typed<Person>(object({
  account: string(),
  get additionalTosAcceptances() { return optional(PersonAdditionalTosAcceptancesSchema) },
  get address() { return optional(AddressSchema) },
  get addressKana() { return optional(LegalEntityJapanAddressSchema) },
  get addressKanji() { return optional(LegalEntityJapanAddressSchema) },
  created: number(),
  get dob() { return optional(LegalEntityDobSchema) },
  email: optional(string()),
  firstName: optional(string()),
  firstNameKana: optional(string()),
  firstNameKanji: optional(string()),
  fullNameAliases: optional(array(string())),
  get futureRequirements() { return optional(PersonFutureRequirementsSchema) },
  gender: optional(string()),
  id: string(),
  idNumberProvided: optional(boolean()),
  idNumberSecondaryProvided: optional(boolean()),
  lastName: optional(string()),
  lastNameKana: optional(string()),
  lastNameKanji: optional(string()),
  maidenName: optional(string()),
  get metadata() { return optional(MetadataPropertySchema) },
  nationality: optional(string()),
  object: string(),
  phone: optional(string()),
  politicalExposure: optional(string()),
  get registeredAddress() { return optional(AddressSchema) },
  get relationship() { return optional(PersonRelationshipSchema) },
  get requirements() { return optional(PersonRequirementsSchema) },
  ssnLast4Provided: optional(boolean()),
  get usCfpbData() { return optional(PersonUsCfpbDataSchema) },
  get verification() { return optional(LegalEntityPersonVerificationSchema) },
}));