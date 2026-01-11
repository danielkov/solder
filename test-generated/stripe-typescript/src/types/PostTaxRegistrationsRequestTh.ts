import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * thailand
 */
export interface PostTaxRegistrationsRequestTh {
  type: string;
}

export const PostTaxRegistrationsRequestThSchema: TypedSchema<PostTaxRegistrationsRequestTh> = typed<PostTaxRegistrationsRequestTh>(object({
  type: string(),
}));