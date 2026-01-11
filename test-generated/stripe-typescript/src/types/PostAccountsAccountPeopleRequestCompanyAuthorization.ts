import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountPeopleRequestFilesItem } from './PostAccountsAccountPeopleRequestFilesItem';
import { PostAccountsAccountPeopleRequestFilesItemSchema } from './PostAccountsAccountPeopleRequestFilesItem';
/**
 * documents_param
 */
export interface PostAccountsAccountPeopleRequestCompanyAuthorization {
  files?: Array<PostAccountsAccountPeopleRequestFilesItem>;
}

export const PostAccountsAccountPeopleRequestCompanyAuthorizationSchema: TypedSchema<PostAccountsAccountPeopleRequestCompanyAuthorization> = typed<PostAccountsAccountPeopleRequestCompanyAuthorization>(object({
  get files() { return optional(array(PostAccountsAccountPeopleRequestFilesItemSchema)) },
}));