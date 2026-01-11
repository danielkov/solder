import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountPeopleRequestCompanyAuthorization } from './PostAccountsAccountPeopleRequestCompanyAuthorization';
import { PostAccountsAccountPeopleRequestCompanyAuthorizationSchema } from './PostAccountsAccountPeopleRequestCompanyAuthorization';
/**
 * person_documents_specs
 */
export interface PostTokensRequestDocuments {
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

export const PostTokensRequestDocumentsSchema: TypedSchema<PostTokensRequestDocuments> = typed<PostTokensRequestDocuments>(object({
  get companyAuthorization() { return optional(PostAccountsAccountPeopleRequestCompanyAuthorizationSchema) },
  get passport() { return optional(PostAccountsAccountPeopleRequestCompanyAuthorizationSchema) },
  get visa() { return optional(PostAccountsAccountPeopleRequestCompanyAuthorizationSchema) },
}));