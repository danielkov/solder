import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * controller_losses_specs
 */
export interface PostAccountsRequestLosses {
  payments?: string;
}

export const PostAccountsRequestLossesSchema: TypedSchema<PostAccountsRequestLosses> = typed<PostAccountsRequestLosses>(object({
  payments: optional(string()),
}));