import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsRequestDelayDays = string | number;

export const PostAccountsRequestDelayDaysSchema: TypedSchema<PostAccountsRequestDelayDays> = typed<PostAccountsRequestDelayDays>(union(string(), number()));