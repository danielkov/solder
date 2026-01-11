import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountPeopleRequestCompanyAuthorization } from './PostAccountsAccountPeopleRequestCompanyAuthorization';
import { PostAccountsAccountPeopleRequestCompanyAuthorizationSchema } from './PostAccountsAccountPeopleRequestCompanyAuthorization';
/**
 * person_documents_specs
 *
 * Documents that may be submitted to satisfy various informational requests.
 */
export interface PostAccountsAccountPeopleRequestDocuments {
  /**
   * documents_param
   */
  companyAuthorization?: PostAccountsAccountPeopleRequestCompanyAuthorization;
  /**
   * documents_param
   */
  passport?: PostAccountsAccountPeopleRequestCompanyAuthorization;
  /**
   * documents_param
   */
  visa?: PostAccountsAccountPeopleRequestCompanyAuthorization;
}

export const PostAccountsAccountPeopleRequestDocumentsSchema: TypedSchema<PostAccountsAccountPeopleRequestDocuments> = typed<PostAccountsAccountPeopleRequestDocuments>(object({
  get companyAuthorization() { return optional(PostAccountsAccountPeopleRequestCompanyAuthorizationSchema) },
  get passport() { return optional(PostAccountsAccountPeopleRequestCompanyAuthorizationSchema) },
  get visa() { return optional(PostAccountsAccountPeopleRequestCompanyAuthorizationSchema) },
}));