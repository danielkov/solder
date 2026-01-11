import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostSubscriptionsRequestOnBehalfOf = string | string;

export const PostSubscriptionsRequestOnBehalfOfSchema: TypedSchema<PostSubscriptionsRequestOnBehalfOf> = typed<PostSubscriptionsRequestOnBehalfOf>(union(string(), string()));