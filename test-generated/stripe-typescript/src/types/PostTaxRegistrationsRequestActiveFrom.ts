import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostTaxRegistrationsRequestActiveFrom = string | number;

export const PostTaxRegistrationsRequestActiveFromSchema: TypedSchema<PostTaxRegistrationsRequestActiveFrom> = typed<PostTaxRegistrationsRequestActiveFrom>(union(string(), number()));