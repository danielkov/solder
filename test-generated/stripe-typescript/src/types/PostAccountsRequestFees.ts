import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * controller_fees_specs
 */
export interface PostAccountsRequestFees {
  payer?: string;
}

export const PostAccountsRequestFeesSchema: TypedSchema<PostAccountsRequestFees> = typed<PostAccountsRequestFees>(object({
  payer: optional(string()),
}));