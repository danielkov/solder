import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestAddress } from './PostAccountsRequestAddress';
import { PostAccountsRequestAddressSchema } from './PostAccountsRequestAddress';
import type { PostAccountsRequestAddressKana } from './PostAccountsRequestAddressKana';
import { PostAccountsRequestAddressKanaSchema } from './PostAccountsRequestAddressKana';
import type { PostAccountsRequestAddressKanji } from './PostAccountsRequestAddressKanji';
import { PostAccountsRequestAddressKanjiSchema } from './PostAccountsRequestAddressKanji';
import type { PostAccountsRequestDirectorshipDeclaration } from './PostAccountsRequestDirectorshipDeclaration';
import { PostAccountsRequestDirectorshipDeclarationSchema } from './PostAccountsRequestDirectorshipDeclaration';
import type { PostAccountsRequestOwnershipDeclaration } from './PostAccountsRequestOwnershipDeclaration';
import { PostAccountsRequestOwnershipDeclarationSchema } from './PostAccountsRequestOwnershipDeclaration';
import type { PostAccountsRequestRegistrationDate } from './PostAccountsRequestRegistrationDate';
import { PostAccountsRequestRegistrationDateSchema } from './PostAccountsRequestRegistrationDate';
import type { PostAccountsRequestRepresentativeDeclaration } from './PostAccountsRequestRepresentativeDeclaration';
import { PostAccountsRequestRepresentativeDeclarationSchema } from './PostAccountsRequestRepresentativeDeclaration';
import type { PostAccountsRequestVerification } from './PostAccountsRequestVerification';
import { PostAccountsRequestVerificationSchema } from './PostAccountsRequestVerification';
/**
 * connect_js_account_token_company_specs
 */
export interface PostTokensRequestCompany {
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
  directorsProvided?: boolean;
  /**
   * company_directorship_declaration
   */
  directorshipDeclaration?: PostAccountsRequestDirectorshipDeclaration;
  executivesProvided?: boolean;
  exportLicenseId?: string;
  exportPurposeCode?: string;
  name?: string;
  nameKana?: string;
  nameKanji?: string;
  ownersProvided?: boolean;
  /**
   * company_ownership_declaration
   */
  ownershipDeclaration?: PostAccountsRequestOwnershipDeclaration;
  ownershipDeclarationShownAndSigned?: boolean;
  ownershipExemptionReason?: string;
  phone?: string;
  registrationDate?: PostAccountsRequestRegistrationDate;
  registrationNumber?: string;
  /**
   * company_representative_declaration
   */
  representativeDeclaration?: PostAccountsRequestRepresentativeDeclaration;
  structure?: string;
  taxId?: string;
  taxIdRegistrar?: string;
  vatId?: string;
  /**
   * verification_specs
   */
  verification?: PostAccountsRequestVerification;
}

export const PostTokensRequestCompanySchema: TypedSchema<PostTokensRequestCompany> = typed<PostTokensRequestCompany>(object({
  get address() { return optional(PostAccountsRequestAddressSchema) },
  get addressKana() { return optional(PostAccountsRequestAddressKanaSchema) },
  get addressKanji() { return optional(PostAccountsRequestAddressKanjiSchema) },
  directorsProvided: optional(boolean()),
  get directorshipDeclaration() { return optional(PostAccountsRequestDirectorshipDeclarationSchema) },
  executivesProvided: optional(boolean()),
  exportLicenseId: optional(string()),
  exportPurposeCode: optional(string()),
  name: optional(string()),
  nameKana: optional(string()),
  nameKanji: optional(string()),
  ownersProvided: optional(boolean()),
  get ownershipDeclaration() { return optional(PostAccountsRequestOwnershipDeclarationSchema) },
  ownershipDeclarationShownAndSigned: optional(boolean()),
  ownershipExemptionReason: optional(string()),
  phone: optional(string()),
  get registrationDate() { return optional(PostAccountsRequestRegistrationDateSchema) },
  registrationNumber: optional(string()),
  get representativeDeclaration() { return optional(PostAccountsRequestRepresentativeDeclarationSchema) },
  structure: optional(string()),
  taxId: optional(string()),
  taxIdRegistrar: optional(string()),
  vatId: optional(string()),
  get verification() { return optional(PostAccountsRequestVerificationSchema) },
}));