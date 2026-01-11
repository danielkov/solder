import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsAccountPeopleRequestFilesItem = string | string;

export const PostAccountsAccountPeopleRequestFilesItemSchema: TypedSchema<PostAccountsAccountPeopleRequestFilesItem> = typed<PostAccountsAccountPeopleRequestFilesItem>(union(string(), string()));