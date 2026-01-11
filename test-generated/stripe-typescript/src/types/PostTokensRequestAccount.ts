import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTokensRequestCompany } from './PostTokensRequestCompany';
import { PostTokensRequestCompanySchema } from './PostTokensRequestCompany';
import type { PostTokensRequestIndividual } from './PostTokensRequestIndividual';
import { PostTokensRequestIndividualSchema } from './PostTokensRequestIndividual';
/**
 * connect_js_account_token_specs
 *
 * Information for the account this token represents.
 */
export interface PostTokensRequestAccount {
  businessType?: string;
  /**
   * connect_js_account_token_company_specs
   */
  company?: PostTokensRequestCompany;
  /**
   * individual_specs
   */
  individual?: PostTokensRequestIndividual;
  tosShownAndAccepted?: boolean;
}

export const PostTokensRequestAccountSchema: TypedSchema<PostTokensRequestAccount> = typed<PostTokensRequestAccount>(object({
  businessType: optional(string()),
  get company() { return optional(PostTokensRequestCompanySchema) },
  get individual() { return optional(PostTokensRequestIndividualSchema) },
  tosShownAndAccepted: optional(boolean()),
}));