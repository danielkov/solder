import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { LegalEntityCompanyVerification } from './LegalEntityCompanyVerification';
import { LegalEntityCompanyVerificationSchema } from './LegalEntityCompanyVerification';
import type { LegalEntityDirectorshipDeclaration } from './LegalEntityDirectorshipDeclaration';
import { LegalEntityDirectorshipDeclarationSchema } from './LegalEntityDirectorshipDeclaration';
import type { LegalEntityJapanAddress } from './LegalEntityJapanAddress';
import { LegalEntityJapanAddressSchema } from './LegalEntityJapanAddress';
import type { LegalEntityRegistrationDate } from './LegalEntityRegistrationDate';
import { LegalEntityRegistrationDateSchema } from './LegalEntityRegistrationDate';
import type { LegalEntityRepresentativeDeclaration } from './LegalEntityRepresentativeDeclaration';
import { LegalEntityRepresentativeDeclarationSchema } from './LegalEntityRepresentativeDeclaration';
import type { LegalEntityUboDeclaration } from './LegalEntityUboDeclaration';
import { LegalEntityUboDeclarationSchema } from './LegalEntityUboDeclaration';
/**
 * LegalEntityCompany
 *
 * 
 */
export interface LegalEntityCompany {
  /**
   * Address
   *
   * 
   */
  address?: Address;
  /**
   * The Kana variation of the company's primary address (Japan only).
   */
  addressKana?: LegalEntityJapanAddress;
  /**
   * The Kanji variation of the company's primary address (Japan only).
   */
  addressKanji?: LegalEntityJapanAddress;
  /**
   * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
   */
  directorsProvided?: boolean;
  /**
   * This hash is used to attest that the director information provided to Stripe is both current and correct.
   */
  directorshipDeclaration?: LegalEntityDirectorshipDeclaration;
  /**
   * Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
   */
  executivesProvided?: boolean;
  /**
   * The export license ID number of the company, also referred as Import Export Code (India only).
   */
  exportLicenseId?: string;
  /**
   * The purpose code to use for export transactions (India only).
   */
  exportPurposeCode?: string;
  /**
   * The company's legal name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  name?: string;
  /**
   * The Kana variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  nameKana?: string;
  /**
   * The Kanji variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  nameKanji?: string;
  /**
   * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
   */
  ownersProvided?: boolean;
  /**
   * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
   */
  ownershipDeclaration?: LegalEntityUboDeclaration;
  /**
   * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
   */
  ownershipExemptionReason?: string;
  /**
   * The company's phone number (used for verification).
   */
  phone?: string;
  /**
   * LegalEntityRegistrationDate
   *
   * 
   */
  registrationDate?: LegalEntityRegistrationDate;
  /**
   * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
   */
  representativeDeclaration?: LegalEntityRepresentativeDeclaration;
  /**
   * The category identifying the legal structure of the company or legal entity. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
   */
  structure?: string;
  /**
   * Whether the company's business ID number was provided.
   */
  taxIdProvided?: boolean;
  /**
   * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
   */
  taxIdRegistrar?: string;
  /**
   * Whether the company's business VAT number was provided.
   */
  vatIdProvided?: boolean;
  /**
   * Information on the verification state of the company.
   */
  verification?: LegalEntityCompanyVerification;
}

export const LegalEntityCompanySchema: TypedSchema<LegalEntityCompany> = typed<LegalEntityCompany>(object({
  get address() { return optional(AddressSchema) },
  get addressKana() { return optional(LegalEntityJapanAddressSchema) },
  get addressKanji() { return optional(LegalEntityJapanAddressSchema) },
  directorsProvided: optional(boolean()),
  get directorshipDeclaration() { return optional(LegalEntityDirectorshipDeclarationSchema) },
  executivesProvided: optional(boolean()),
  exportLicenseId: optional(string()),
  exportPurposeCode: optional(string()),
  name: optional(string()),
  nameKana: optional(string()),
  nameKanji: optional(string()),
  ownersProvided: optional(boolean()),
  get ownershipDeclaration() { return optional(LegalEntityUboDeclarationSchema) },
  ownershipExemptionReason: optional(string()),
  phone: optional(string()),
  get registrationDate() { return optional(LegalEntityRegistrationDateSchema) },
  get representativeDeclaration() { return optional(LegalEntityRepresentativeDeclarationSchema) },
  structure: optional(string()),
  taxIdProvided: optional(boolean()),
  taxIdRegistrar: optional(string()),
  vatIdProvided: optional(boolean()),
  get verification() { return optional(LegalEntityCompanyVerificationSchema) },
}));