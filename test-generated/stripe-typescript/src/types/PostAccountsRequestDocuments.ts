import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification } from './PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification';
import { PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema } from './PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification';
import type { PostAccountsRequestProofOfRegistration } from './PostAccountsRequestProofOfRegistration';
import { PostAccountsRequestProofOfRegistrationSchema } from './PostAccountsRequestProofOfRegistration';
/**
 * documents_specs
 *
 * Documents that may be submitted to satisfy various informational requests.
 */
export interface PostAccountsRequestDocuments {
  /**
   * documents_param
   */
  bankAccountOwnershipVerification?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * documents_param
   */
  companyLicense?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * documents_param
   */
  companyMemorandumOfAssociation?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * documents_param
   */
  companyMinisterialDecree?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * documents_param
   */
  companyRegistrationVerification?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * documents_param
   */
  companyTaxIdVerification?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * documents_param
   */
  proofOfAddress?: PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification;
  /**
   * signer_param
   */
  proofOfRegistration?: PostAccountsRequestProofOfRegistration;
  /**
   * signer_param
   */
  proofOfUltimateBeneficialOwnership?: PostAccountsRequestProofOfRegistration;
}

export const PostAccountsRequestDocumentsSchema: TypedSchema<PostAccountsRequestDocuments> = typed<PostAccountsRequestDocuments>(object({
  get bankAccountOwnershipVerification() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get companyLicense() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get companyMemorandumOfAssociation() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get companyMinisterialDecree() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get companyRegistrationVerification() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get companyTaxIdVerification() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get proofOfAddress() { return optional(PostAccountsRequestBankAccountObjectBankAccountOwnershipVerificationSchema) },
  get proofOfRegistration() { return optional(PostAccountsRequestProofOfRegistrationSchema) },
  get proofOfUltimateBeneficialOwnership() { return optional(PostAccountsRequestProofOfRegistrationSchema) },
}));