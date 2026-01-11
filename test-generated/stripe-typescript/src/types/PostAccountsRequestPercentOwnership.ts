import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsRequestPercentOwnership = number | string;

export const PostAccountsRequestPercentOwnershipSchema: TypedSchema<PostAccountsRequestPercentOwnership> = typed<PostAccountsRequestPercentOwnership>(union(number(), string()));