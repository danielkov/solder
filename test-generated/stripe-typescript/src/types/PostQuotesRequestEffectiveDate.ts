import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestEffectiveDate = string | number | string;

export const PostQuotesRequestEffectiveDateSchema: TypedSchema<PostQuotesRequestEffectiveDate> = typed<PostQuotesRequestEffectiveDate>(union(string(), number(), string()));