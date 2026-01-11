import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostPlansRequestTiersItemUpTo = string | number;

export const PostPlansRequestTiersItemUpToSchema: TypedSchema<PostPlansRequestTiersItemUpTo> = typed<PostPlansRequestTiersItemUpTo>(union(string(), number()));