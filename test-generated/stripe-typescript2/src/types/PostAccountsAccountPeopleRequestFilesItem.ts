import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostAccountsAccountPeopleRequestFilesItem = string | string;

export const PostAccountsAccountPeopleRequestFilesItemSchema: TypedSchema<PostAccountsAccountPeopleRequestFilesItem> = typed<PostAccountsAccountPeopleRequestFilesItem>(union(string(), string()));
