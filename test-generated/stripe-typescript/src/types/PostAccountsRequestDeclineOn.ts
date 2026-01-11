import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * decline_charge_on_specs
 */
export interface PostAccountsRequestDeclineOn {
  avsFailure?: boolean;
  cvcFailure?: boolean;
}

export const PostAccountsRequestDeclineOnSchema: TypedSchema<PostAccountsRequestDeclineOn> = typed<PostAccountsRequestDeclineOn>(object({
  avsFailure: optional(boolean()),
  cvcFailure: optional(boolean()),
}));