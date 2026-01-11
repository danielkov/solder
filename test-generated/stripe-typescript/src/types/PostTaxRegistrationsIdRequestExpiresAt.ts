import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostTaxRegistrationsIdRequestExpiresAt = string | number | string;

export const PostTaxRegistrationsIdRequestExpiresAtSchema: TypedSchema<PostTaxRegistrationsIdRequestExpiresAt> = typed<PostTaxRegistrationsIdRequestExpiresAt>(union(string(), number(), string()));