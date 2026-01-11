import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostTaxRegistrationsIdRequestActiveFrom = string | number;

export const PostTaxRegistrationsIdRequestActiveFromSchema: TypedSchema<PostTaxRegistrationsIdRequestActiveFrom> = typed<PostTaxRegistrationsIdRequestActiveFrom>(union(string(), number()));